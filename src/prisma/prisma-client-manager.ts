import {
  Injectable,
  OnModuleDestroy,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import * as clientConfigs from '../../config.json';
import { ERR_UNAUTHORIZED_CLIENT_ID } from '../common/error/error-code';
import { PrismaService } from '../prisma.service';
import * as process from 'process';
import { ClientManager } from './ClientManager';

@Injectable()
export class PrismaClientManager implements OnModuleDestroy {
  private clients: { [key: string]: PrismaService } = {};

  getClientId(request: Request) {
    const headers = request?.headers ?? request?.['req'].headers;
    return headers['x-client-id'] as string;
  }

  async getClient(request: Request) {
    const clientId = this.getClientId(request);
    if (clientId && clientId in clientConfigs) {
      const { databaseUrl, timezone } = clientConfigs[`${clientId}`] as {
        databaseUrl: string;
        timezone: string;
      };

      // Change the DATABASE_URL to the databaseUrl coming from the request
      process.env.DATABASE_URL = databaseUrl;

      let client = this.clients[clientId];
      if (!client) {
        client = new PrismaService({
          datasources: { db: { url: databaseUrl } },
        });
        this.clients[clientId] = client; // Save the client for future use
      }
      ClientManager.setClient(clientConfigs[clientId]);
      // if (!this.isReadOperation(request)) client.cache.clear();
      // else client.$executeCache();
      client.$disconnect();
      return client;
    } else {
      throw new UnauthorizedException(ERR_UNAUTHORIZED_CLIENT_ID);
    }
  }

  async onModuleDestroy() {
    await Promise.all(
      Object.values(this.clients).map((client) => client.$disconnect()),
    );
  }

  isReadOperation(request: Request): boolean {
    // For REST API
    if (request?.method === 'GET') {
      return true;
    }

    // For GraphQL
    if (request?.['req']?.body?.query) {
      const operationType = request?.['req'].body.query.trim().split(' ')[0];
      return operationType === 'query';
    }

    return false;
  }

  private _disconnect(client: PrismaService): PrismaService {
    return new Proxy(client, {
      get(target, prop, receiver) {
        if (typeof target[prop] === 'function') {
          return async (...args: any) => {
            try {
              return await target[prop](...args);
            } finally {
              target.$disconnect();
            }
          };
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }
}
