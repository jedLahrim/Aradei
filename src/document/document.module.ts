import { Module } from '@nestjs/common';
import { DocumentResolver } from './document.resolver';
import { DocumentService } from './document.service';
import { PrismaService } from '../prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { NotificationService } from '../notification/notification.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { EmailService } from '../email/email.service';

@Module({
  providers: [
    DocumentResolver,
    EmailService,
    DocumentService,
    PrismaService,
    MailerService,
    NotificationService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
  exports: [DocumentService],
})
export class DocumentModule {}
