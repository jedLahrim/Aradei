import { FactoryProvider, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PrismaService } from '../prisma.service';
import { PrismaClientManager } from './prisma-client-manager';
import { Request } from 'express';

export const PrismaClientProvider: FactoryProvider<Promise<PrismaService>> = {
  provide: PrismaService,
  scope: Scope.REQUEST,
  inject: [REQUEST, PrismaClientManager],
  useFactory: (request: Request, manager: PrismaClientManager) => {
    return manager.getClient(request);
  },
};
