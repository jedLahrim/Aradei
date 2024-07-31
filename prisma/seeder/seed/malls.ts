import { PrismaClient } from '@prisma/client';
import { borjFezRetailCenter } from '../assets/borjFez';
import { lbgElJadidaRetailCenter } from '../assets/lbgElJadida';
import { lbgMeknesRetailCenter } from '../assets/lbgMeknes';
import { lbgRabatRetailCenter } from '../assets/lbgRabat';
import { lbgSafiRetailCenter } from '../assets/lbgSafi';
import { selaParkAgadirRetailCenter } from '../assets/selaParkAgadir';
import { selaParkTemaraRetailCenter } from '../assets/selaParkTemara';
import { selaPlazaDarBouazzaRetailCenter } from '../assets/selaPlazaDarBouazza';
import { selaPlazaTargaRetailCenter } from '../assets/selaPlazaTarga';
import { soccoAltoRetailCenter } from '../assets/soccoAlto';
import { BookingSeeder } from '../bookingSeeder';
import { alMazarRetailCenter } from '../assets/alMazar';
import { atacadaoAinSbaaRetailCenter } from '../assets/atacadaoAinSbaa';
import { carrefourSidiMaaroufRetailCenter } from '../assets/carrefourSidiMaarouf';
import { selaElJadidaRetailCenter } from '../assets/selaElJadida';
import { almazRetailCenter } from '../assets/almaz';
import { cfaoRetailCenter } from '../assets/cfao';
import { elMenzehRetailCenter } from '../assets/elMenzeh';
import { isCuid } from '@paralleldrive/cuid2';

const prisma = new PrismaClient();

export async function seedMalls() {
  console.log('Seeding malls');

  const retailCenters = [
    borjFezRetailCenter,
    lbgElJadidaRetailCenter,
    lbgMeknesRetailCenter,
    lbgRabatRetailCenter,
    lbgSafiRetailCenter,
    selaParkAgadirRetailCenter,
    selaParkTemaraRetailCenter,
    selaPlazaDarBouazzaRetailCenter,
    selaPlazaTargaRetailCenter,
    soccoAltoRetailCenter,
    alMazarRetailCenter,
    atacadaoAinSbaaRetailCenter,
    carrefourSidiMaaroufRetailCenter,
    selaElJadidaRetailCenter,
    almazRetailCenter,
    cfaoRetailCenter,
    elMenzehRetailCenter,
  ];

  for (const rc of retailCenters) {
    const { floors, ...retailCenterData } = rc;
    const retailCenter = await prisma.retailCenter.create({
      data: retailCenterData,
    });

    for (const fl of floors) {
      const floor = await prisma.floor.create({
        data: {
          name: fl.name,
          retailCenterId: retailCenter.id,
          svgBluePrint: fl.svgBluePrint,
        },
      });
      await setUnits(fl.units, floor.id, retailCenter);
    }
  }
}

async function setUnits(units, floorId, retailCenter) {
  for (const unit of units) {
    const specialties = [];
    if (unit.specialty !== '') {
      let speciality = await prisma.speciality.findFirst({
        where: {
          alias: unit.specialty,
        },
      });
      if (!speciality) {
        speciality = await prisma.speciality.create({
          data: {
            alias: unit.specialty,
          },
        });
      }
      specialties.push(speciality.id);
    }
    const newUnit = await prisma.unit.create({
      data: {
        unitId: unit.unitId,
        alias: unit.alias,
        floor: {
          connect: {
            id: floorId,
          },
        },
        status: 0,
        rentType: unit.rentType,
        specialities: {
          connect: specialties.map((id: number) => {
            return {
              id,
            };
          }),
        },
        videoLength: '',
        surface: unit.surface,
        category: {
          connect: {
            id: 3,
          },
        },
        width: 0,
        depth: 0,
        measurementUnit: 'meters',
        facadeLength: null,
        qty: 0,
        maxHeight: 0,
        dependency: false,
        features: undefined,
        dayPrice: 0,
        weekPrice: 0,
        monthPrice: 0,
        sqMeterPrice: 0,
        sqMeterPriceSecondYear: 0,
        sqMeterPriceThirdYear: 0,
        description: '',
        specialTerms: '',
        mix: {
          connect: {
            id: 9,
          },
        },
      },
    });

    if (
      unit.company &&
      unit.company !== '' &&
      unit.brand &&
      unit.brand !== ''
    ) {
      if (isCuid(unit.company) && isCuid(unit.brand)) {
        await createBooking({
          dateFrom: unit.leaseFrom,
          dateTo: unit.leaseTo,
          brandId: unit.brand,
          companyId: unit.company,
          retailCenter,
          unitId: newUnit.unitId,
          id: newUnit.id,
          surface: newUnit.surface,
          price: newUnit.monthPrice,
          rentType: newUnit.rentType,
        });
      }
    }
  }
}

async function createBooking(data: {
  dateFrom: Date;
  dateTo: Date;
  brandId: string;
  companyId: string;
  retailCenter: any;
  unitId: string;
  id: string;
  surface: number;
  price: number;
  rentType: number;
}) {
  let type: 'MEDIA' | 'PROPOSAL' | 'HOT' = 'HOT';

  switch (data.rentType) {
    case 1:
      type = 'HOT';
      break;
    case 2:
      type = 'PROPOSAL';
      break;
    case 3:
      type = 'MEDIA';
      break;
  }

  await BookingSeeder.createBooking({
    brandId: data.brandId,
    companyId: data.companyId,
    id: data.id,
    unitId: data.unitId,
    surface: data.surface,
    price: data.price,
    dateFrom: new Date(data.dateFrom || new Date('2023-1-1')),
    dateTo: new Date(data.dateTo || new Date('2024-12-30')),
    type,
    retailCenterId: data.retailCenter.id,
  });
}
