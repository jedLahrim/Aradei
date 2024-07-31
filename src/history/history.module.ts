import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { HistoryResolver } from './history.resolver';
import { HistoryService } from './history.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    PrismaService,
    HistoryResolver,
    HistoryService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class HistoryModule {}
