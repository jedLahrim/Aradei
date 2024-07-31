import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { EmailNotificationResolver } from './email.notification.resolver';
import { EmailNotificationService } from './email.notification.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    PrismaService,
    EmailNotificationResolver,
    EmailNotificationService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class EmailNotificationModule {}
