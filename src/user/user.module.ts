import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { PrismaModule } from 'src/prisma.module';

@Module({
  providers: [
    PrismaClientManager,
    PrismaClientProvider,
    UserResolver,
    UserService,
    JwtService,
  ],
  imports: [PrismaModule],
})
export class UserModule {}
