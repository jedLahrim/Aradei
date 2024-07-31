import { seedLeads } from './seed/leads';
import { seedMalls } from './seed/malls';
import { seedUsers } from './seed/users';
import { seedMixes } from './seed/mixes';
import { seedValidationKind } from './seed/validationKind';
import { PrismaClient } from '@prisma/client';
import { seedEmailNotifications } from './seed/emailNotification';

const prisma = new PrismaClient();

async function main() {
  await prisma.speciality.createMany({
    data: [
      {
        id: 1,
        alias: 'REGIE',
      },
      {
        id: 2,
        alias: 'PLV',
      },
      {
        id: 3,
        alias: 'TEMPORARY',
      },
      {
        id: 4,
        alias: 'ONE-WAY',
      },
      {
        id: 5,
        alias: 'BACHE',
      },
      {
        id: 6,
        alias: 'STAND',
      },
      {
        id: 7,
        alias: 'OUTDOOR',
      },
      {
        id: 8,
        alias: 'STORAGE',
      },
      {
        id: 9,
        alias: 'OTHER',
      },
    ],
  });

  await prisma.feature.createMany({
    data: [
      {
        alias: 'WIFI',
      },
      {
        alias: 'POWER',
      },
      {
        alias: 'MEDIA',
      },
      {
        alias: 'STORAGE',
      },
      {
        alias: 'AC',
      },
    ],
  });

  await prisma.category.createMany({
    data: [
      {
        id: 1,
        name: 'Habillage',
      },
      {
        id: 2,
        name: 'Ecran',
      },
      {
        id: 3,
        name: 'Autre',
      },
    ],
  });
}

(async () => {
  try {
    await main();
    await seedUsers();
    await seedValidationKind();
    await seedLeads();
    await seedMixes();
    await seedMalls();
    await seedEmailNotifications();
  } catch (e) {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  }
})();
