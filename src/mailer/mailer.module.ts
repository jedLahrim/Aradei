import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { MailerService } from '../mailer/mailer.service';
import { MailerResolver } from './mailer.resolver';
import { JwtService } from '@nestjs/jwt';
import { NotificationService } from '../notification/notification.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { EmailService } from '../email/email.service';

@Module({
  providers: [
    MailerService,
    PrismaService,
    EmailService,
    UserService,
    MailerResolver,
    JwtService,
    NotificationService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class MailerModule {}
