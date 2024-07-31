import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedValidationKind() {
  console.log('Seeding Validation Kind');

  const contractValidationKind = await prisma.validationKind.create({
    data: {
      id: 1,
      alias: 'CONTRACT_VALIDATION', // WE ASK FOR CONTRACT
      rolesNeeded: {
        connect: {
          id: 3, // LEGAL ROLE STUFF , CONNECT AS MANY ROLES NEEDED
        },
      },
      isAutomated: false,
      isOverride: false,
      isFinal: true, // THE ACTION WILL NOT REQUEST ANYMORE VALIDATIONS
      isSpecialty: true,
    },
  });

  const invoiceValidationKind = await prisma.validationKind.create({
    data: {
      id: 2,
      alias: 'INVOICE_VALIDATION', // WE ASK FOR CONTRACT
      rolesNeeded: {
        connect: {
          id: 8, // FINANCE ROLE STUFF , CONNECT AS MANY ROLES NEEDED
        },
      },
      isAutomated: false,
      isOverride: false,
      isFinal: true, // THE ACTION WILL NOT REQUEST ANYMORE VALIDATIONS
      isSpecialty: true,
    },
  });

  const ficheCOMValidationKind = await prisma.validationKind.create({
    data: {
      id: 3,
      alias: 'FICHE_COM',
      rolesNeeded: {
        connect: [{ id: 11 }, { id: 8 }, { id: 22 }, { id: 9 }],
      },
      isAutomated: false,
      isOverride: false,
      isFinal: false,
      isSpecialty: true,
    },
  });

  const ficheCOMLTValidationKind = await prisma.validationKind.create({
    data: {
      id: 4,
      alias: 'FICHE_COM_LT',
      rolesNeeded: {
        connect: [{ id: 5 }, { id: 8 }, { id: 22 }, { id: 9 }],
      },
      isAutomated: false,
      isOverride: false,
      isFinal: false,
      isSpecialty: true,
    },
  });

  const ficheRTMValidationKind = await prisma.validationKind.create({
    data: {
      id: 5,
      alias: 'FICHE_COM_RTM',
      rolesNeeded: {
        connect: [{ id: 3 }, { id: 8 }],
      },
      isAutomated: false,
      isOverride: false,
      isFinal: false,
      isSpecialty: true,
    },
  });

  const installationValidationKind = await prisma.validationKind.create({
    data: {
      id: 6,
      alias: 'PV_LIVRAISON',
      rolesNeeded: {
        connect: [{ id: 6 }],
      },
      isAutomated: false,
      isOverride: false,
      isFinal: true,
      isSpecialty: true,
    },
  });

  const ficheRTMTecValidationKind = await prisma.validationKind.create({
    data: {
      id: 7,
      alias: 'FICHE_COM_RTM_TEC',
      rolesNeeded: {
        connect: [{ id: 6 }],
      },
      isAutomated: false,
      isOverride: false,
      isFinal: true,
      isSpecialty: true,
    },
  });

  const mediaValidationKind = await prisma.validationKind.create({
    data: {
      id: 8,
      alias: 'MEDIA',
      rolesNeeded: {
        connect: [{ id: 15 }],
      },
      isAutomated: false,
      isOverride: false,
      isFinal: true,
      isSpecialty: true,
    },
  });
  const quoteValidationKind = await prisma.validationKind.create({
    data: {
      id: 9,
      alias: 'QUOTE',
      rolesNeeded: {
        connect: [{ id: 9 }],
      },
      isAutomated: false,
      isOverride: false,
      isFinal: true,
      isSpecialty: true,
    },
  });
  const oipValidationKind = await prisma.validationKind.create({
    data: {
      id: 10,
      alias: 'OIP',
      rolesNeeded: {
        connect: [{ id: 9 }],
      },
      isAutomated: false,
      isOverride: false,
      isFinal: true,
      isSpecialty: true,
    },
  });
}
