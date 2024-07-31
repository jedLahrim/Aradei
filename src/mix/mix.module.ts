import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MixService } from './mix.service';
import { MixResolver } from './mix.resolver';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    MixResolver,
    MixService,
    PrismaService,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class MixModule {}
