import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { NotificationResolver } from './notification.resolver';
import { NotificationService } from './notification.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    PrismaService,
    NotificationResolver,
    NotificationService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class NotificationModule {}
