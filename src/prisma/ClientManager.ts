import { AppClient } from 'app-client';

export class ClientManager {
  private static client: AppClient | null = null;
  static setClient(client: AppClient) {
    this.client = client;
  }
  static getClient() {
    return this.client;
  }
}
