import { ConflictException, Injectable } from '@nestjs/common';
import { ClientManager } from '../prisma/ClientManager';
import { PrismaService } from '../prisma.service';
import { Client } from './entities/client.entity';
import * as fs from 'fs';
import { ERR_INVALID_COLOR } from '../common/error/error-code';
import { UpdateClientInput } from './dto/update-client.input';
import path from 'path';
import clientConfig from 'config.json';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  getClient(): Client {
    const client = ClientManager.getClient();
    const hexColorRegex = /^#[0-9A-F]{6}$/i;
    const idValidColor = hexColorRegex.test(client.primaryColor);
    if (!idValidColor) throw new ConflictException(ERR_INVALID_COLOR);
    return client;
  }

  updateClient(updateClientInput: UpdateClientInput): Client {
    const { legal } = updateClientInput;
    const client = this.getClient();
    const configFilePath = path.resolve(__dirname, '../../../config.json');
    if (legal)
      client.legal = {
        ...client.legal,
        ...legal,
      };
    // Write the updated config back to the file
    this._writeConfigFile(clientConfig, configFilePath);
    return client;
  }

  private _writeConfigFile(data: any, configFilePath: string): void {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(configFilePath, jsonData, 'utf-8');
  }
}
