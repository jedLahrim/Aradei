import { Module } from '@nestjs/common';
import { TalkService } from './talk.service';
import { TalkResolver } from './talk.resolver';
import { PrismaService } from '../prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { NotificationService } from '../notification/notification.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { EmailService } from '../email/email.service';

@Module({
  providers: [
    PrismaService,
    TalkResolver,
    TalkService,
    MailerService,
    NotificationService,
    EmailService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class TalkModule {}
