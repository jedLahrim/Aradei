import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClientManager } from './prisma/prisma-client-manager';
import { PrismaClientProvider } from './prisma/multi-tenancy.middleware';

@Module({
  providers: [PrismaService, PrismaClientManager, PrismaClientProvider],
  exports: [PrismaService],
})
export class PrismaModule {}
