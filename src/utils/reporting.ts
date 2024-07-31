import { PrismaService } from '../prisma.service';

export class ReportingModel {
  prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  private getDiff(dateFrom: string | Date, dateTo: string | Date) {
    if (typeof dateFrom === 'string') dateFrom = new Date(dateFrom);
    if (typeof dateTo === 'string') dateTo = new Date(dateTo);
    return Math.floor(
      (dateTo.getTime() - dateFrom.getTime()) / 1000 / 60 / 60 / 24,
    );
  }

  async getStatByDoc(type: 'HOT' | 'CONTRACT') {
    let sum = 0;
    switch (type) {
      case 'HOT':
        sum = await this.getHOTStats();
        break;
      case 'CONTRACT':
        sum = await this.getContractStats();
        break;
    }
    const count = await this.prisma.document.count({
      where: {
        type,
        booking: {
          status: {
            not: 3,
          },
          contractComplete: false,
          contractCompletedAt: null,
          signedAt: null,
        },
      },
    });

    return {
      count,
      total: sum,
    };
  }

  private async getHOTStats() {
    const hotBookings = await this.prisma.booking.findMany({
      where: {
        status: {
          not: 3,
        },
        contractComplete: false,
        type: 'HOT',
        documents: {
          some: {
            type: 'HOT',
          },
          none: {
            type: 'CONTRACT',
          },
        },
      },
      include: {
        documents: true,
      },
    });

    let total = 0;
    hotBookings.forEach((booking) => {
      const dataObj = JSON.parse(
        booking.documents.find((doc) => doc.type == 'HOT').dataObj,
      );
      const yearly = dataObj?.rent[0] + dataObj?.common[0];
      total += yearly * 12;
    });

    return total;
  }

  private async getContractStats() {
    const contractBookings = await this.prisma.booking.findMany({
      where: {
        status: {
          not: 3,
        },
        contractComplete: false,
        type: 'HOT',
        documents: {
          some: {
            type: 'CONTRACT',
          },
        },
      },
      include: {
        documents: true,
      },
    });

    let total = 0;
    contractBookings.forEach((booking) => {
      const doc = booking.documents.find((doc) => doc.type == 'HOT');
      if (doc) {
        const dataObj = JSON.parse(doc?.dataObj);
        const yearly = dataObj?.rent[0] + dataObj?.common[0];
        total += yearly * 12;
      }
    });

    return total;
  }

  private async getSpecialtyRevenueByMonth(
    type: 'PROPOSAL' | 'MEDIA',
    month: number,
    assetId: string,
    user,
  ) {
    const profile = await this.prisma.userProfile.findUnique({
      where: {
        id: user ? user.id : '',
      },
      include: {
        retailCenters: true,
      },
    });
    const bookings = await this.prisma.booking.findMany({
      where: {
        status: 3,
        type,
        signedAt: {
          not: null,
        },
        OR: [
          {
            units: {
              some: {
                floor: {
                  retailCenter: {
                    id: {
                      in:
                        user?.level === 22 || user?.level === 12
                          ? profile?.retailCenters?.map((value) => value.id)
                          : undefined,
                    },
                  },
                },
              },
            },
          },
          {
            units: {
              some: {
                floor: {
                  retailCenter: {
                    id: assetId ?? undefined,
                  },
                },
              },
            },
          },
        ],
      },
      include: {
        quoteEdits: {
          include: {
            quote: true,
          },
        },
      },
    });

    let monthsRevenues = 0;
    let prevYearMonthsRevenues = 0;

    for (const booking of bookings) {
      if (
        booking.signedAt.getFullYear() === new Date(Date.now()).getFullYear() &&
        booking.signedAt.getMonth() === month
      ) {
        monthsRevenues += booking.quoteEdits?.[0]?.quote.total ?? 0;
      }
      if (
        booking.signedAt.getFullYear() ===
          new Date(Date.now()).getFullYear() - 1 &&
        booking.signedAt.getMonth() === month
      ) {
        prevYearMonthsRevenues += booking.quoteEdits?.[0]?.quote.total ?? 0;
      }
    }

    return { monthsRevenues, prevYearMonthsRevenues };
  }

  private async getLongTermRevenueByMonth(month: number) {
    const bookings = await this.prisma.booking.findMany({
      where: {
        status: 3,
        type: 'HOT',
        contractCompletedAt: {
          not: null,
        },
      },
      include: {
        quoteEdits: {
          include: {
            quote: true,
          },
        },
      },
    });

    let monthsRevenues = 0;
    let prevYearMonthsRevenues = 0;

    for (const booking of bookings) {
      if (
        booking.contractCompletedAt.getFullYear() ===
          new Date(Date.now()).getFullYear() &&
        booking.contractCompletedAt.getMonth() === month
      ) {
        monthsRevenues += booking.quoteEdits?.[0]?.quote?.total ?? 0;
      }
      if (
        booking.contractCompletedAt.getFullYear() ===
          new Date(Date.now()).getFullYear() - 1 &&
        booking.contractCompletedAt.getMonth() === month
      ) {
        prevYearMonthsRevenues += booking.quoteEdits?.[0]?.quote?.total ?? 0;
      }
    }

    return { monthsRevenues, prevYearMonthsRevenues };
  }

  async getMonthRevenues(
    type: 'MEDIA' | 'PROPOSAL' | 'HOT' | 'ALL',
    assetId: string,
    user,
  ) {
    const currentMonthsGroup = new Array(12).fill(0);
    const previousMonthsGroup = new Array(12).fill(0);

    for (let index = 0; index < currentMonthsGroup.length; index++) {
      if (type === 'HOT') {
        const revs = await this.getLongTermRevenueByMonth(index);
        currentMonthsGroup[index] = revs.monthsRevenues;
        previousMonthsGroup[index] = revs.prevYearMonthsRevenues;
      }
      if (type === 'MEDIA' || type === 'PROPOSAL') {
        const revs = await this.getSpecialtyRevenueByMonth(
          type,
          index,
          assetId,
          user,
        );
        currentMonthsGroup[index] = revs.monthsRevenues;
        previousMonthsGroup[index] = revs.prevYearMonthsRevenues;
      }
      if (type === 'ALL') {
        const revsHOT = await this.getLongTermRevenueByMonth(index);
        const revsMEDIA = await this.getSpecialtyRevenueByMonth(
          'MEDIA',
          index,
          assetId,
          user,
        );
        const revsPROPOSAL = await this.getSpecialtyRevenueByMonth(
          'PROPOSAL',
          index,
          assetId,
          user,
        );

        currentMonthsGroup[index] =
          revsHOT.monthsRevenues +
          revsMEDIA.monthsRevenues +
          revsPROPOSAL.monthsRevenues;
        previousMonthsGroup[index] =
          revsHOT.prevYearMonthsRevenues +
          revsMEDIA.prevYearMonthsRevenues +
          revsPROPOSAL.prevYearMonthsRevenues;
      }
    }

    return {
      currentMonthsGroup,
      previousMonthsGroup,
    };
  }

  async getTotalRevenue(year?: number, companyId?: string) {
    const wherePrisma: any = {
      booking: {
        status: 3,
      },
    };
    if (companyId) {
      wherePrisma.booking = { companyId };
    }

    let quotes = await this.prisma.quoteEdit.findMany({
      distinct: 'bookingId',
      include: {
        booking: true,
        quote: true,
      },
      where: wherePrisma,
    });
    if (year) {
      quotes = quotes.filter((q) => q.booking.signedAt.getFullYear() === year);
    }
    const totalLongTermRevenue = quotes
      .filter((quote) => quote.booking.type === 'HOT')
      .reduce((p, c) => c.quote.total + p, 0);
    const totalSpecialtyRevenue = quotes
      .filter((quote) => quote.booking.type === 'PROPOSAL')
      .reduce((p, c) => c.quote.total + p, 0);
    const totalMediaRevenue = quotes
      .filter((quote) => quote.booking.type === 'MEDIA')
      .reduce((p, c) => c.quote.total + p, 0);

    return {
      totalLongTermRevenue,
      totalSpecialtyRevenue,
      totalMediaRevenue,
      total: totalMediaRevenue + totalLongTermRevenue + totalMediaRevenue,
    };
  }

  async getAssetsRevenueByType(
    type?: 'MEDIA' | 'PROPOSAL' | 'HOT',
    year?: number,
  ) {
    const retailCenters = await this.prisma.retailCenter.findMany({
      include: {
        floors: {
          include: {
            units: {
              include: {
                bookings: {
                  include: {
                    quoteEdits: {
                      include: {
                        quote: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    function filterBooking(booking) {
      if (booking.status !== 3) {
        return false;
      }
      if (booking.signedAt === null) {
        return false;
      }

      if (year && booking.signedAt.getFullYear() !== year) {
        return false;
      }

      if (type && booking.type !== type) {
        return false;
      }

      return true;
    }

    const data = retailCenters.map((retailCenter) => {
      return {
        id: retailCenter.id,
        name: retailCenter.name,
        total: retailCenter.floors
          .flatMap((floor) =>
            floor.units.flatMap((unit) =>
              unit.bookings
                .filter(filterBooking)
                .flatMap((booking) =>
                  booking.quoteEdits.flatMap((qe) => qe.quote.total),
                ),
            ),
          )
          .reduce((p, c) => p + c, 0),
      };
    });

    return data;
  }

  async getRevenueEvolution(type: 'MEDIA' | 'PROPOSAL' | 'HOT') {
    const currentYear = new Date(Date.now()).getFullYear();
    const previousYear = currentYear - 1;
    const currentRevenueStand = await this.getAssetsRevenueByType(
      type,
      currentYear,
    );
    const previousRevenueStand = await this.getAssetsRevenueByType(
      type,
      previousYear,
    );

    return currentRevenueStand.map((asset, index) => {
      return {
        id: asset.id,
        name: asset.name,
        evolution:
          previousRevenueStand[index].total === 0
            ? 0
            : ((asset.total - previousRevenueStand[index].total) /
                previousRevenueStand[index].total) *
              100,
      };
    });
  }

  async getAverageLeasingTime(): Promise<{ days: number; count: number }[]> {
    const bookings = await this.prisma.booking.findMany({
      where: {
        status: 3,
        signedAt: {
          not: null,
        },
      },
    });
    const daysNb: { days: number; count: number }[] = [];

    bookings.forEach((booking) => {
      const diff = this.getDiff(booking.dateFrom, booking.dateTo);
      const index = daysNb.findIndex((n) => n.days === diff);
      if (index === -1) {
        daysNb.push({
          days: diff,
          count: 1,
        });
      } else {
        daysNb[index].count += 1;
      }
    });

    return daysNb;
  }

  async getDealsByType(types: ('MEDIA' | 'PROPOSAL' | 'HOT')[]) {
    const bookings = await this.prisma.booking.findMany({
      include: {
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
      },
      where: {
        AND: {
          status: 3,
          signedAt: {
            not: null,
          },
          OR: types.map((type) => {
            return {
              type,
            };
          }),
        },
      },
    });

    const retailCenters: { id: string; name: string; count: number }[] = [];

    bookings.forEach((booking) => {
      const index = retailCenters.findIndex(
        (r) => r.id === booking.units[0].floor.retailCenterId,
      );
      if (index === -1) {
        retailCenters.push({
          id: booking.units[0].floor.retailCenterId,
          name: booking.units[0].floor.retailCenter.name,
          count: 0,
        });
      } else {
        retailCenters[index].count++;
      }
    });

    return retailCenters;
  }

  async getSpecialtyLeasingPerformance(user) {
    const temporaryRevenues = (
      await this.getMonthRevenues('PROPOSAL', undefined, undefined)
    ).currentMonthsGroup;
    const mediaRevenues = (
      await this.getMonthRevenues('MEDIA', undefined, undefined)
    ).currentMonthsGroup;

    return {
      temporaryRevenues,
      mediaRevenues,
    };
  }

  async getTurnoverByAsset() {
    return this.getAssetsRevenueByType();
  }

  async getTurnoverByMix() {
    const mixes = await this.prisma.mix.findMany({
      include: {
        units: {
          include: {
            bookings: {
              include: {
                quoteEdits: {
                  include: {
                    quote: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const turnoverByMix = mixes.map((mix) => {
      return {
        id: String(mix.id),
        name: mix.alias,
        total: mix.units
          .flatMap((unit) =>
            unit.bookings
              .filter(
                (booking) => booking.status === 3 && booking.signedAt != null,
              )
              .flatMap((booking) =>
                booking.quoteEdits.flatMap((qe) => qe.quote.total),
              ),
          )
          .reduce((p, c) => p + c, 0),
      };
    });

    return turnoverByMix;
  }

  async getRevenueStandVSMedia(year: number) {
    const revenueByYear = await this.getTotalRevenue(year);
    return {
      temporaryRevenues: revenueByYear.totalSpecialtyRevenue,
      mediaRevenues: revenueByYear.totalMediaRevenue,
    };
  }

  async getRevenueStand(year: number) {
    return await this.getAssetsRevenueByType('PROPOSAL', year);
  }

  async getRevenueMedia(year: number) {
    return await this.getAssetsRevenueByType('MEDIA', year);
  }

  async getRevenueStandsEvolution() {
    return await this.getRevenueEvolution('PROPOSAL');
  }

  async getRevenueMediaEvolution() {
    return await this.getRevenueEvolution('MEDIA');
  }
}
