import { execSync } from 'child_process';
import { NotFoundException } from '@nestjs/common';
import { ERR_NOT_FOUND_CLIENT_ID } from '../src/common/error/error-code';
import clientConfigs from '../config.json';
import { ClientType } from '../src/common/constant';

for (const clientId in clientConfigs) {
  const client = clientConfigs[clientId] as ClientType;
  if (!client) {
    throw new NotFoundException(ERR_NOT_FOUND_CLIENT_ID);
  }

  try {
    console.log(`🚩 Migrating ${client.name} DB`);
    process.env.DATABASE_URL = client.databaseUrl;
    execSync(`prisma migrate deploy`, { stdio: ['pipe', 'inherit'] });
  } catch (error) {
    console.error('Error applying migration:', error.message);
    rollBack(error);
    process.exit(1);
  }
}

function rollBack(error: TypeError) {
  const match = error.message.match(/Migration name: (.+)/);
  if (match && match.length > 1) {
    const migrationName = match[1];
    console.log(`⏪ Migration '${migrationName}' rolling back.`);
    try {
      console.log(`⏳ Resolving '${migrationName}'...`);
      execSync(`prisma migrate resolve --rolled-back ${migrationName}`, {
        stdio: ['pipe', 'inherit'],
      });
      console.log(`✅ Migration '${migrationName}' resolved and rolled back.`);
    } catch (resolveError) {
      console.error(
        `❌ Error resolving migration '${migrationName}':`,
        resolveError.message,
      );
      process.exit(1);
    }
  }
}
