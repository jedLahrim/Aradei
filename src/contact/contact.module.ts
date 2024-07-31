import { Module } from '@nestjs/common';
import { ContactResolver } from './contact.resolver';
import { ContactService } from './contact.service';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';

@Module({
  providers: [
    ContactResolver,
    UserService,
    ContactService,
    JwtService,
    PrismaService /*HistoryService*/,
    PrismaClientManager,
    PrismaClientProvider,
  ],
})
export class ContactModule {}
