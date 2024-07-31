import { Module } from '@nestjs/common';
import { FloorResolver } from './floor.resolver';
import { FloorService } from './floor.service';
import { PrismaService } from '../prisma.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    FloorResolver,
    FloorService,
    PrismaService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class FloorModule {}
