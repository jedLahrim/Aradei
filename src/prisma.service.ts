import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { Constant } from './common/constant';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  cache: Map<string, any> = new Map();
  cacheTTL: number = Constant.CACHE_TTL;

  async onModuleInit() {
    await this.connect(6);
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }

  async connect(maxRetries: number, retryInterval?: number) {
    try {
      await super.$connect();
    } catch (error) {
      console.error('Error connecting to Prisma:', error);
      let retries = 1;
      const reconnect = async () => {
        if (retries <= maxRetries) {
          setTimeout(async () => {
            try {
              await super.$connect();
              // console.log('Prisma reconnected ✅');
            } catch (error) {
              console.error(`Error reconnecting to Prisma: ${retries}`, error);
              retries++;
              await reconnect();
            }
          }, retryInterval ?? 5000);
        }
      };

      await reconnect();
    }
  }

  // $executeCache() {
  //   this.$use(async (params, next) => {
  //     const cacheKey = JSON.stringify(params);
  //
  //     if (this.cache.has(cacheKey)) {
  //       const cachedResult = this.cache.get(cacheKey);
  //       if (Date.now() - cachedResult.timestamp < this.cacheTTL) {
  //         return cachedResult.result;
  //       } else {
  //         this.cache.delete(cacheKey);
  //       }
  //     }
  //
  //     const result = await next(params);
  //     this.cache.set(cacheKey, { result, timestamp: Date.now() });
  //     return result;
  //   });
  // }

  private invalidateCache(params: Prisma.MiddlewareParams) {
    // Invalidate all cache entries related to the modified entity
    const affectedKeys = Array.from(this.cache.keys()).filter((key) =>
      key.includes(params.model),
    );
    affectedKeys.forEach((key) => this.cache.delete(key));
  }
}
