import { brandsContent } from '../leads/brands';
import { PrismaClient } from '@prisma/client';
import { companiesContent } from '../leads/companies';
import { brandsCompanies } from '../leads/brandsCompanies';
import { CompanyType, LeadStatus } from '../../../src/utils/enums/lead.enum';
const prisma = new PrismaClient();

export async function seedLeads() {
  console.log('Seeding leads...');
  await seedBrands();
  await seedCompanies();
  await seedGroups();
}

async function seedBrands() {
  for (const brand of brandsContent) {
    await prisma.brand.create({
      data: {
        id: brand.id,
        name: brand.name,
        logo: brand.logo,
        description: '',
        products: '',
      },
    });

    await prisma.contact.create({
      data: {
        email: 'contact@gmail.com',
        name: 'Nom',
        position: 'Directeur',
        firstname: 'Prénom',
        phone: '+212333333',
        brands: {
          connect: {
            id: brand.id,
          },
        },
        creator: {
          connect: {
            id: '000000000000',
          },
        },
      },
    });
  }
}

async function seedCompanies() {
  for (const company of companiesContent) {
    await prisma.company.create({
      data: {
        id: company.id,
        name: company.name,
        type: CompanyType.COMPANY,
        status: LeadStatus.VALIDATED,
        managerName: 'Manager',
        managerID: 'Manager',
        phone: '+2123333333',
        email: 'email@gmail.com',
        creator: {
          connect: {
            id: '000000000000',
          },
        },
        brands: {
          connect: brandsCompanies
            .filter((bc) => bc.companyId === company.id)
            .map((bc) => {
              return {
                id: bc.brandId,
              };
            }),
        },
      },
    });
  }
}

async function seedGroups(count = 5) {
  for (let index = 0; index < count; index++) {
    const companies = await prisma.company.findMany({
      take: 1,
      skip: index,
    });
    await prisma.companyGroup.create({
      data: {
        name: 'Group ' + (index + 1),
        companies: {
          connect: {
            id: companies[0].id,
          },
        },
      },
    });
  }
}
