import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testGetUnavailableBookingDates() {
  try {
    await prisma.$connect();

    const unitId = 'clktwnbe4006ew0c08n2r78s6';

    const unavailableDates = await prisma.booking.findMany({
      where: {
        units: {
          some: {
            id: unitId,
          },
        },
        status: 3,
        dateTo: {
          gte: new Date(),
        },
      },
      select: {
        dateFrom: true,
        dateTo: true,
      },
    });

    console.log('Unavailable Booking Dates:', unavailableDates);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function testGetAvailableUnits() {
  try {
    await prisma.$connect();

    const dateFrom = new Date('2023-08-30');
    const dateTo = new Date('2023-08-31');
    const floorId = 'clktwnaic001hw0c0hf2cjc7r'; // or undefined

    const unitIdsWithoutBooking = await prisma.unit.findMany({
      where: {
        floorId,
        bookings: {
          none: {
            status: 3,
            dateFrom: {
              lte: dateTo,
            },
            dateTo: {
              gte: dateFrom,
            },
          },
        },
      },
      select: {
        id: true,
      },
    });
    const unitIdStrings = unitIdsWithoutBooking.map((unit) => unit.id);
    console.log(unitIdStrings);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testGetUnavailableBookingDates();
testGetAvailableUnits();
