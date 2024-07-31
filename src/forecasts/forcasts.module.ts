import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { ForcastsResolver } from './forcasts.resolver';
import { ForcastsService } from './forcasts.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    PrismaService,
    ForcastsResolver,
    ForcastsService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class ForcastsModule {}
