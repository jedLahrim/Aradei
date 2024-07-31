import { Module } from '@nestjs/common';
import { ValidationResolver } from './validation.resolver';
import { ValidationService } from './validation.service';
import { PrismaService } from '../prisma.service';
import { MailerService } from 'src/mailer/mailer.service';
import { NotificationService } from '../notification/notification.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { EmailService } from '../email/email.service';

@Module({
  providers: [
    ValidationResolver,
    ValidationService,
    PrismaService,
    EmailService,
    MailerService,
    NotificationService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class ValidationModule {}
