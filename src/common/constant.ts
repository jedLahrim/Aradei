import { AppClient } from 'app-client';

export class Constant {
  static TAKE = 4;
  static SKIP = 0;
  static BACKEND_HOST: string = 'api2.squarefeet.cloud';
  static TRANSACTION_DEFAULT_TIMEOUT: number = 80000;
  // one hour cache time to live
  static CACHE_TTL: number = 60 * 60 * 1000;
}
export type ClientType = AppClient;
