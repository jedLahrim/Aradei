import { Module } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';
import { PrismaService } from '../prisma.service';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { PrismaClientManager } from '../prisma/prisma-client-manager';

@Module({
  providers: [
    CompanyResolver,
    CompanyService,
    PrismaService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class CompanyModule {}
