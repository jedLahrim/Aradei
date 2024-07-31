import { Injectable } from '@nestjs/common';
import { InjectMailgun } from '@mindik/mailgun-nestjs';
import * as path from 'path';
import { readFile } from 'fs/promises';
import * as handlebars from 'handlebars';
import { formatDateShort } from '../utils/date';
import { PrismaService } from '../prisma.service';
import { NotificationService } from '../notification/notification.service';
import { ClientManager } from '../prisma/ClientManager';
import { toUtc } from '../common/decorators/to-utc-date.decorator';
// import { toUtc } from '../common/decorators/to-utc-date.decorator';

@Injectable()
export class EmailService {
  constructor(
    @InjectMailgun() private readonly mg,
    private prisma: PrismaService,
    private notificationService: NotificationService,
  ) {}

  async sendEmail(
    user,
    fileNames,
    bookingId,
    messageType,
    documentLink,
    document,
    toParam,
    comment,
  ) {
    const booking = await this.fetchBookingData(bookingId);
    const messageNotification = await this.fetchMessageNotification(
      messageType,
    );
    const emailTemplate = await this.fetchEmailTemplate();
    const recipients = await this.collectRecipients(
      messageNotification,
      toParam,
      booking,
    );
    if (messageNotification.toProspect) {
      recipients.push(booking?.prospect.email);
    }
    if (document) {
      recipients.push(document.creator.email);
    }

    const retailCenterName = booking.units
      .map((unit) => `${unit.floor.retailCenter.name} - ${unit.unitId}`)
      .join(' / ');
    const creator = await this.prisma.userProfile.findUnique({
      where: { id: user.id },
    });
    const subjectTemplate = this.compileTemplate(messageNotification.subject, {
      retailCenterName,
      brand: booking.brand.name,
    });
    const messageTemplate = this.compileTemplate(messageNotification.message, {
      contact: `${booking?.prospect.title} ${booking.prospect.firstname} ${booking?.prospect.name}`,
      creator: `${creator.firstName} ${creator.name}`,
      signature: `${emailTemplate.signature}`,
      commercialFullName: `${creator.firstName} ${creator.name}`,
      commercialJobTitle: `${creator.jobTitle}`,
      commercialMobilePhone: `${creator.mobilePhone}`,
      documentLink,
      company: booking.company.name,
      brand: booking.brand.name,
      retailCenter: retailCenterName,
      retailCenters: this.formatRetailCenters(booking.units),
      units: this.formatUnits(booking.units),
      floors: this.formatFloors(booking.units),
      surface: this.formatSurface(booking.units),
      dateFrom: formatDateShort(toUtc(booking.dateFrom)),
      dateTo: formatDateShort(toUtc(booking.dateTo)),
      comment: comment,
    });

    console.log('recipients', recipients);
    console.log('messageType', messageType);
    const messageParams = await this.constructMessageParams(
      user,
      recipients,
      subjectTemplate,
      messageTemplate,
      emailTemplate,
      fileNames,
      messageNotification,
    );

    if (recipients.length > 0) {
      await this.mg.messages.create('squarefeet.cloud', messageParams);

      await this.createNotificationsForRecipients(
        recipients,
        messageType,
        bookingId,
        subjectTemplate,
      );
    }
    return true;
  }
  private async createNotificationsForRecipients(
    recipients,
    messageType,
    bookingId,
    subjectTemplate,
  ) {
    const userProfiles = await this.prisma.userProfile.findMany({
      where: {
        email: {
          in: recipients,
        },
        status: 1,
        roleId: {
          not: 99,
        },
      },
    });
    if (userProfiles.length > 0) {
      await this.notificationService.createNotification({
        message: subjectTemplate,
        type: messageType,
        bookingId,
        users: userProfiles.map((user) => user.id),
      });
    }
  }

  private async constructMessageParams(
    user,
    recipients,
    subjectTemplate,
    messageTemplate,
    emailTemplate,
    fileNames,
    messageNotification,
  ) {
    const attachments = await Promise.all(
      fileNames.map(async (fileName) => {
        const filepath = path.resolve(
          path.join(__dirname, `../../..${fileName}`),
        );
        const data = await readFile(filepath);
        return { filename: path.basename(fileName), data };
      }),
    );
    const emailFromName = ClientManager.getClient().emailFromName;
    const emailFrom = ClientManager.getClient().emailFrom;
    return {
      from: `${emailFromName} <${emailFrom}>`,
      to: recipients,
      subject: subjectTemplate,
      attachment: attachments,
      cc: messageNotification.toSender ? user.email : '',
      'h:Reply-To': user.email,
      html: this.constructEmailHtml(emailTemplate, messageTemplate),
    };
  }
  private constructEmailHtml(emailTemplate, messageTemplate) {
    const header = emailTemplate.headerImage;
    const footer = emailTemplate.footerImage;
    console.log('header', header);
    console.log('footer', footer);
    return `<html><body><table style="width: 500px; margin: 0 auto;"><tr><td><img src="${header}" alt="Header Image" /></td></tr><tr><td>${messageTemplate}</td></tr><tr><td></td></tr><tr><td><img src="${footer}" alt="Footer Image" /></td></tr><tr><td style="text-align: center;"><p><a href="${emailTemplate.linkWebsite}" rel="noopener noreferrer" target="_blank">${emailTemplate.linkWebsite}</a></p></td></tr></table></body></html>`;
  }
  private formatUnits(units) {
    return units.reduce((current, unit) => current + unit.unitId + ', ', '');
  }
  private formatRetailCenters(units) {
    return units.reduce(
      (current, unit) => current + unit.floor.retailCenter.name + ', ',
      '',
    );
  }
  private formatFloors(units) {
    return units.reduce(
      (current, unit) => current + unit.floor.name + ', ',
      '',
    );
  }
  private formatSurface(units) {
    return units.reduce((current, unit) => current + unit.surface + 'm², ', '');
  }
  private compileTemplate(templateString, data) {
    const template = handlebars.compile(templateString);
    return template(data);
  }
  private async fetchBookingData(bookingId) {
    return this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        prospect: true,
        company: true,
        brand: true,
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
      },
    });
  }
  private async fetchMessageNotification(messageType) {
    return this.prisma.messageNotification.findFirst({
      where: { name: messageType },
      include: { tos: true },
    });
  }
  private async fetchEmailTemplate() {
    return this.prisma.emailTemplate.findFirst({ where: { id: 1 } });
  }
  private async collectRecipients(messageNotification, toParam, booking) {
    const usersWithRoles = await this.prisma.userProfile.findMany({
      where: {
        roleId: { in: messageNotification.tos.map((to) => to.id) },
        status: 1,
      },
      include: { retailCenters: true },
    });

    const usersWithEmails = await this.prisma.userProfile.findMany({
      where: { email: { in: toParam }, status: 1 },
      include: { retailCenters: true },
    });

    const allUsers = [...usersWithRoles, ...usersWithEmails];

    return allUsers
      .filter((profile) => {
        if (profile.retailCenters.length > 0) {
          return profile.retailCenters.some(
            (rc) => rc.id === booking.units[0].floor.retailCenter.id,
          );
        }
        return true;
      })
      .map((profile) => profile.email)
      .filter(Boolean);
  }
}
