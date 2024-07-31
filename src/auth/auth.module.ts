import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma.service';
import { NestLogger } from '../logger.service';
import { UserModule } from '../user/user.module';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaClientManager } from '../prisma/prisma-client-manager';
import { PrismaClientProvider } from '../prisma/multi-tenancy.middleware';
import { AuthResolver } from './auth.resolver';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    PrismaModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    PrismaService,
    NestLogger,
    JwtStrategy,
    PrismaClientManager,
    PrismaClientProvider,
    AuthResolver,
  ],
  exports: [AuthService],
})
export class AuthModule {}
