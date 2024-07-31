import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Booking } from 'src/booking/entities/booking.entity';
import { Document } from 'src/document/entities/document.entity';
import { EmailService } from '../email/email.service';

@Injectable()
export class MailerService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  private async sendEmailAndUpdateHistory(
    user,
    fileNames: string[],
    bookingId: string,
    template: string,
    action: string,
    contactId: string,
  ) {
    await this.emailService.sendEmail(
      user,
      fileNames,
      bookingId,
      template,
      '',
      undefined,
      [],
      undefined,
    );
    await this.prisma.history.create({
      data: {
        action,
        creator: { connect: { id: user.id } },
        booking: { connect: { id: bookingId } },
        contact: { connect: { id: contactId } },
      },
    });
  }

  private async updateDocumentSentStatus(documentId: string) {
    await this.prisma.document.update({
      where: { id: documentId },
      data: {
        sent: true,
        sentAt: new Date(),
      },
    });
  }

  async sendMarjaneInvoice(user, fileName, booking) {
    await this.sendEmailAndUpdateHistory(
      user,
      [fileName],
      booking.id,
      'send_invoice',
      'SENT_INVOICE',
      booking.prospect.id,
    );
    return true;
  }

  async sendQuote(user, fileName, booking) {
    const fileNames = [
      `../../..${fileName}`,
      '../../../uploads/docTemplates/cgv-devis.pdf',
    ];
    await this.sendEmailAndUpdateHistory(
      user,
      fileNames,
      booking.id,
      'new_quote',
      'QUOTE SENT',
      booking.prospect.id,
    );
  }

  async sendProposal(user, fileName, bookingId) {
    const updatedProposal = await this.prisma.booking.update({
      where: { id: bookingId },
      data: {
        proposalSentAt: new Date(),
        proposalSent: true,
      },
    });

    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        prospect: true,
        units: { include: { floor: { include: { retailCenter: true } } } },
      },
    });

    await this.sendEmailAndUpdateHistory(
      user,
      [fileName],
      bookingId,
      'new_proposal',
      'PROPOSAL SENT',
      booking.prospect.id,
    );

    return updatedProposal;
  }

  async sendConvention(user, fileName, bookingId) {
    await this.emailService.sendEmail(
      user,
      [fileName],
      bookingId,
      'new_convention',
      '',
      undefined,
      [],
      undefined,
    );
    return true;
  }

  async sendInstallation(user, fileName, bookingId) {
    await this.emailService.sendEmail(
      user,
      [fileName],
      bookingId,
      'doc_to_retailer',
      '',
      undefined,
      [],
      undefined,
    );
    return true;
  }

  async sendContract(user, fileName, bookingId) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        documents: true,
        prospect: true,
        units: { include: { floor: { include: { retailCenter: true } } } },
      },
    });

    const contractDoc = booking.documents.find(
      (doc) => doc.type === 'CONTRACT',
    );

    if (contractDoc) {
      await this.updateDocumentSentStatus(contractDoc.id);
    }

    await this.sendEmailAndUpdateHistory(
      user,
      [fileName],
      bookingId,
      'new_convention',
      'CONTRACT SENT',
      booking.prospect.id,
    );

    return true;
  }

  async sendInvoice(user, fileName, bookingId) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        prospect: true,
        documents: true,
        units: { include: { floor: { include: { retailCenter: true } } } },
      },
    });

    const invoice = booking.documents.find((doc) => doc.type === 'INVOICE');

    if (invoice) {
      await this.emailService.sendEmail(
        user,
        [fileName],
        bookingId,
        'send_invoice',
        '',
        undefined,
        [],
        undefined,
      );
      await this.updateDocumentSentStatus(invoice.id);
    }

    return true;
  }

  async sendHot(
    user,
    hotDocument: Document,
    proposalDocument: Document,
    booking: Booking,
  ) {
    const today = new Date();
    const fileNames = [hotDocument.filePath, proposalDocument.filePath];

    await this.emailService.sendEmail(
      user,
      fileNames,
      booking.id,
      'new_offer',
      '',
      undefined,
      [],
      undefined,
    );

    await this.updateDocumentSentStatus(hotDocument.id);
    await this.updateDocumentSentStatus(proposalDocument.id);

    await this.prisma.booking.update({
      where: { id: booking.id },
      data: {
        proposalSent: true,
        proposalSentAt: today,
      },
    });

    await this.prisma.history.create({
      data: {
        action: 'HOT SENT',
        creator: { connect: { id: user.id } },
        booking: { connect: { id: booking.id } },
        document: { connect: { id: hotDocument.id } },
        contact: { connect: { id: booking.prospect.id } },
      },
    });
  }

  async sendValidation(
    user,
    messageType,
    bookingId,
    documentLink,
    documentFilePath,
  ) {
    await this.emailService.sendEmail(
      user,
      documentFilePath,
      bookingId,
      messageType,
      documentLink,
      undefined,
      [],
      undefined,
    );
    return true;
  }

  async sendQuoteConfirm(booking, user) {
    await this.emailService.sendEmail(
      user,
      [],
      booking.id,
      'confirmation_installation_specialty',
      '',
      undefined,
      [],
      undefined,
    );
    return true;
  }

  async sendRelance(to, bookingId, user) {
    await this.emailService.sendEmail(
      user,
      [],
      bookingId,
      'relance',
      '',
      undefined,
      [to],
      undefined,
    );
    return true;
  }

  async sendDocument(user, documentId) {
    const document = await this.prisma.document.findUnique({
      where: { id: documentId },
      include: {
        booking: {
          include: {
            prospect: {
              include: {
                brands: {
                  include: { companies: { include: { companyGroup: true } } },
                },
              },
            },
            units: { include: { floor: { include: { retailCenter: true } } } },
          },
        },
      },
    });

    if (!document) return false;

    const bookingId = document.bookingId;
    const filepath = document.filePath;

    switch (document.type) {
      case 'CONVENTION':
        await this.updateDocumentSentStatus(documentId);
        return await this.sendConvention(user, filepath, bookingId);
        break;
      case 'HOT':
        const proposalDocument = await this.prisma.document.findFirst({
          where: {
            bookingId: document.booking.id,
            type: 'PROPOSAL',
          },
        });
        await this.sendHot(user, document, proposalDocument, document.booking);
        return true;
        break;
      case 'SIGNED_CONTRACT':
        const messageType =
          document.booking.type === 'HOT'
            ? 'confirm_contract_LT'
            : 'confirm_contract_SP';
        await this.emailService.sendEmail(
          user,
          [filepath],
          bookingId,
          messageType,
          '',
          undefined,
          [],
          undefined,
        );
        await this.updateDocumentSentStatus(documentId);
        return true;
        break;
      case 'SIGNED_INSTALLATION':
        await this.emailService.sendEmail(
          user,
          [filepath],
          bookingId,
          'confirm_installation',
          '',
          undefined,
          [],
          undefined,
        );
        await this.updateDocumentSentStatus(documentId);
        return true;
        break;
      default:
        await this.updateDocumentSentStatus(documentId);
        return true;
    }
  }

  async sendHOTValidationNotification(user, bookingId) {
    await this.emailService.sendEmail(
      user,
      [],
      bookingId,
      'Request_Technical_Docs',
      '',
      undefined,
      [],
      undefined,
    );
    return true;
  }

  async sendValidationNotification(data, user) {
    const emailTemplates = {
      3: 'leasing_form_validated',
      4: 'leasing_form_lt_validated',
      5: 'RTM_form_validated',
      10: 'OIP_Validated',
    };

    const template = emailTemplates[data.kind];

    if (template) {
      await this.emailService.sendEmail(
        user,
        [],
        data.bookingId,
        template,
        data.documentLink,
        data.document,
        [],
        undefined,
      );
    }

    return true;
  }

  async validationNotification(data, user, messageType, documentLink) {
    await this.emailService.sendEmail(
      user,
      [],
      data.bookingId,
      messageType,
      documentLink,
      data.document,
      [],
      undefined,
    );
    return true;
  }

  async sendCommentNotification(data, user) {
    console.log('talk', data.talk);
    const emailTemplates = {
      3: 'Comments_Fiche_Com',
      4: 'Comments_Fiche_Com_LT',
      5: 'Comments_Fiche_RTM',
      6: 'Comments_PV_Livraison',
      10: 'Comments_OIP',
    };

    const template = emailTemplates[data.kind];

    if (template) {
      await this.emailService.sendEmail(
        user,
        [],
        data.bookingId,
        template,
        data.documentLink,
        data.document,
        [],
        data.talk.content,
      );
    }

    return true;
  }
}
