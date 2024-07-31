import { Module } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { ReportingResolver } from './reporting.resolver';
import { PrismaService } from '../prisma.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    PrismaService,
    ReportingService,
    ReportingResolver,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class ReportingModule {}
