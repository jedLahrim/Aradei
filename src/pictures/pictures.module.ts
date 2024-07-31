import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { PictureService } from './pictures.service';
import { PictureResolver } from './pictures.resolver';

@Module({
  providers: [
    PrismaService,
    PictureService,
    PictureResolver,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class PictureModule {}
