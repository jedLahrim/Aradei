import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

import { sendPresentationDto } from './dto/send-presentation.dto';
import handlebars from 'handlebars';
import { InjectMailgun } from '@mindik/mailgun-nestjs';
import { promises as fsPromises } from 'fs';
import path from 'path';
import { UserPayload } from '../auth/interface/user-payload';
import { AppError } from '../common/error/app-error';
import { ERR_SEND_PRESENTATION } from '../common/error/error-code';

const { EMAIL_FROM, EMAIL_FROM_NAME, EMAIL_IMAGE } = process.env;

@Injectable()
export class PresentationsService {
  constructor(
    @InjectMailgun() private readonly mg,
    private prisma: PrismaService,
  ) {}

  async sendPresentation(data: sendPresentationDto, user: UserPayload) {
    const { documents: commercialDocs, brandId, companyId, contactId } = data;
    try {
      const presentationDocuments = await this.prisma.commercialDoc.findMany({
        where: {
          id: {
            in: commercialDocs.map((value) => value),
          },
        },
        include: {
          RetailCenter: true,
        },
      });

      const documentsIds = commercialDocs.map((doc) => ({ id: doc }));
      const contact = await this.prisma.contact.findFirst({
        where: {
          id: contactId,
        },
      });

      await this.prisma.presentation.create({
        data: {
          brand: {
            connect: {
              id: brandId,
            },
          },
          company: {
            connect: {
              id: companyId,
            },
          },
          contact: {
            connect: {
              id: contactId,
            },
          },
          commercialDocs: {
            connect: [...documentsIds],
          },
          creator: { connect: { id: user.id } },
        },
      });
      const messageNotification =
        await this.prisma.messageNotification.findFirst({
          where: {
            name: 'send_presentation',
          },
        });
      const emailTemplate = await this.prisma.emailTemplate.findFirst({
        where: {
          id: 1,
        },
      });
      const template = handlebars.compile(messageNotification?.message);
      const subject = handlebars.compile(messageNotification?.subject);

      const subjectTemplate = subject({});
      const messageTemplate = template({});

      const messageParams = {
        from: `${EMAIL_FROM_NAME} <${EMAIL_FROM}>`,
        to: [contact?.email],
        subject: subjectTemplate,
        cc: user.email,
        attachment: [],
        'h:Reply-To': user.email,
        html: `<html><body><table style="width: 500px; margin: 0 auto;"><tr><td><img src="${emailTemplate.headerImage}" alt="Header Image" /></td></tr><tr><td>${messageTemplate}</td></tr><tr><td><p><strong>${emailTemplate.signature}</strong></p></td></tr><tr><td><img src="${emailTemplate.footerImage}" alt="Footer Image" /></td></tr><tr><td style="text-align: center;"><p><a  href="${emailTemplate.linkWebsite}" rel="noopener noreferrer" target="_blank">${emailTemplate.linkWebsite}</a></p></td></tr></table></body></html>`,
      };

      const readFilePromises = presentationDocuments.map(
        (presentationDocument) => {
          const fileName = presentationDocument?.filePath;
          const filepath = path.resolve(
            path.join(__dirname, `../../..${fileName}`),
          );
          return fsPromises.readFile(filepath).then((data) => {
            const file = {
              filename: presentationDocument.RetailCenter
                ? `${presentationDocument.RetailCenter.name} - ${presentationDocument.name}.pdf`
                : `${presentationDocument.name}.pdf`,
              data,
            };
            messageParams.attachment.push(file);
          });
        },
      );
      await Promise.all(readFilePromises);
      await this.mg.messages.create('squarefeet.cloud', messageParams);

      return true;
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_SEND_PRESENTATION, e),
      );
    }
  }

  async getPresentations(user: UserPayload) {
    const presentations = await this.prisma.presentation.findMany({
      include: {
        brand: true,
        company: true,
        contact: true,
        creator: true,
        commercialDocs: {
          include: {
            RetailCenter: true,
          },
        },
      },
    });
    return presentations;
  }
}
