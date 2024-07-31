import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CompanyGroupService } from './group.service';
import { CompanyGroupResolver } from './group.resolver';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    CompanyGroupResolver,
    CompanyGroupService,
    PrismaService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class CompanyGroupModule {}
