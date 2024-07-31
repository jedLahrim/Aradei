import { Module } from '@nestjs/common';
import { UnitResolver } from './unit.resolver';
import { UnitService } from './unit.service';
import { PrismaService } from '../prisma.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    UnitResolver,
    UnitService,
    PrismaService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class UnitModule {}
