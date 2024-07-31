import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { PresentationsResolver } from './presentations.resolver';
import { PresentationsService } from './presentations.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    PrismaService,
    PresentationsResolver,
    PresentationsService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class PresentationsModule {}
