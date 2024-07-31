import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { MailerService } from '../mailer/mailer.service';
import { JwtService } from '@nestjs/jwt';
import { NotificationService } from '../notification/notification.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { MailerResolver } from '../mailer/mailer.resolver';
import { EmailService } from './email.service';

@Module({
  providers: [
    MailerService,
    EmailService,
    PrismaService,
    UserService,
    JwtService,
    NotificationService,
    MailerResolver,
    PrismaClientManager,
    PrismaClientProvider,
  ],
  exports: [EmailService],
})
export class EmailModule {}
