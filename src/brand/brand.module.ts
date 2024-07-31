import { Module } from '@nestjs/common';
import { BrandResolver } from './brand.resolver';
import { BrandService } from './brand.service';
import { PrismaService } from '../prisma.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    PrismaService,
    BrandResolver,
    BrandService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class BrandModule {}
