import { Module } from '@nestjs/common';
import { BookingResolver } from './booking.resolver';
import { BookingService } from './booking.service';
import { DocumentService } from '../document/document.service';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '../mailer/mailer.service';
import { NotificationService } from '../notification/notification.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { EmailService } from '../email/email.service';
import { BookingController } from './booking.controller';

@Module({
  providers: [
    JwtService,
    MailerService,
    EmailService,
    BookingResolver,
    BookingService,
    PrismaService,
    DocumentService,
    UserService,
    NotificationService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
  controllers: [BookingController],
})
export class BookingModule {}
