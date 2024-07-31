import { Module } from '@nestjs/common';
import { RetailCenterResolver } from './retailCenter.resolver';
import { RetailCenterService } from './retailCenter.service';
import { PrismaService } from '../prisma.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    RetailCenterResolver,
    RetailCenterService,
    PrismaService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class RetailCenterModule {}
