import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { getPipe } from 'src/utils/bookingsPipe';
import { ReportingStats } from './entities/revenuesStats.entity';
import { ReportingModel } from 'src/utils/reporting';
import { LeadStatus } from 'src/utils/enums/lead.enum';
import { ReportingType } from './type/reporting.type';
import { UserPayload } from '../auth/interface/user-payload';

@Injectable()
export class ReportingService {
  constructor(private prisma: PrismaService) {}

  async getReportsStats(type: string, assetId: string, user) {
    const leadsCount = await this.prisma.brand.count();
    const newLeadsCount = await this.prisma.brand.count({
      where: {
        status: LeadStatus.PENDING,
      },
    });

    const dealsRevenue = await this.prisma.quote.aggregate({
      where: {
        edits: {
          every: {
            booking: {
              type: type === 'ALL' ? undefined : type,
              status: {
                not: 3,
              },
              contractComplete: false,
              contractCompletedAt: null,
              signedAt: null,
            },
          },
        },
      },
      _sum: {
        total: true,
      },
    });

    const totalDeals = await this.prisma.quote.count({
      where: {
        edits: {
          some: {
            booking: {
              type: type === 'ALL' ? undefined : type,
              status: {
                not: 3,
              },
              contractComplete: false,
              contractCompletedAt: null,
              signedAt: null,
            },
          },
        },
      },
    });
    const profile = await this.prisma.userProfile.findUnique({
      where: {
        id: user.id,
      },
      include: {
        retailCenters: true,
      },
    });

    const bookingsRevenue = await this.prisma.booking.aggregate({
      where: {
        type: type === 'ALL' ? undefined : type,
        status: 3,
        OR: [
          {
            units: {
              some: {
                floor: {
                  retailCenter: {
                    id: {
                      in:
                        user.level === 22 || user.level === 12
                          ? profile.retailCenters.map((value) => value.id)
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
      _sum: {
        total: true,
      },
    });

    const totalBookings = await this.prisma.booking.count({
      where: {
        type: type === 'ALL' ? undefined : type,
        status: 3,
        OR: [
          {
            units: {
              some: {
                floor: {
                  retailCenter: {
                    id: {
                      in:
                        user.level === 22 || user.level === 12
                          ? profile.retailCenters.map((value) => value.id)
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
    });

    const currentDate = new Date();

    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );

    const expirations = await this.prisma.booking.count({
      where: {
        type: type === 'ALL' ? undefined : type,
        status: 3,

        dateTo: {
          gte: firstDay,
          lte: lastDay,
        },
      },
    });

    const _reportingModel = new ReportingModel(this.prisma);
    const hots = await _reportingModel.getStatByDoc('HOT');
    const contracts = await _reportingModel.getStatByDoc('CONTRACT');

    return {
      hots,
      contracts,
      leads: {
        count: leadsCount ?? 0,
        new: newLeadsCount ?? 0,
      },
      deals: {
        total: dealsRevenue._sum.total ?? 0,
        count: totalDeals ?? 0,
      },
      bookings: {
        total: bookingsRevenue._sum.total ?? 0,
        count: totalBookings ?? 0,
      },
      expirations: expirations ?? 0,
    };
  }

  async getStats(user) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // companies
    const CompaniesSinceYesterday = await this.prisma.company.count({
      where: {
        createdAt: {
          gte: yesterday,
        },
      },
    });
    const totalCompanies = await this.prisma.company.count();

    // Bookings
    const totalBookings = await this.prisma.booking.count({
      where: {
        status: 3,
      },
    });
    const bookingsSinceYesterday = await this.prisma.booking.count({
      where: {
        status: 3,
        OR: [
          {
            contractCompletedAt: {
              gte: yesterday,
            },
          },
          {
            signedAt: {
              gte: yesterday,
            },
          },
        ],
      },
    });

    // bookings that have expired
    const totalBookingsExpired = await this.prisma.booking.count({
      where: {
        status: 3,
        dateTo: {
          lt: new Date(),
        },
      },
    });
    const expiredBookingsSinceYesterday = await this.prisma.booking.count({
      where: {
        status: 3,
        dateTo: {
          gte: yesterday,
          lte: new Date(),
        },
      },
    });

    // Deals
    const totalDeals = await this.prisma.booking.aggregate({
      _sum: {
        total: true,
      },
      where: {
        status: 3,
      },
    });
    const dealsSinceYesterday = await this.prisma.booking.aggregate({
      _sum: {
        total: true,
      },
      where: {
        status: 3,
        OR: [
          {
            contractCompletedAt: {
              gte: yesterday,
            },
          },
          {
            signedAt: {
              gte: yesterday,
            },
          },
        ],
      },
    });

    return {
      leads: {
        today: CompaniesSinceYesterday,
        total: totalCompanies,
      },
      bookings: {
        today: bookingsSinceYesterday,
        total: totalBookings,
      },
      expirations: {
        today: expiredBookingsSinceYesterday,
        total: totalBookingsExpired,
      },
      deals: {
        today: dealsSinceYesterday._sum.total ?? 0,
        total: totalDeals._sum.total ?? 0,
      },
    };
  }

  async getCompanyStats(companyId: string) {
    const company = await this.prisma.company.findUnique({
      where: {
        id: companyId,
      },
      include: {
        bookings: {
          include: {
            documents: true,
            quoteEdits: {
              include: {
                quote: true,
              },
            },
          },
        },
        documents: true,
      },
    });

    let totalBookings = 0;
    let countBooked = 0;
    let totalRevenue = 0;
    let totalPipe = 0;

    const completedBookings = company.bookings.filter(
      (booking) => booking.status === 3,
    );

    totalBookings += company.bookings.filter(
      (booking) =>
        booking.status !== 3 &&
        booking.signedAt === null &&
        booking.contractComplete === false,
    ).length;
    countBooked += completedBookings.length;
    totalRevenue += completedBookings.reduce(
      (acc, booking) => acc + booking.total,
      0,
    );
    totalPipe += getPipe(
      company.bookings.filter((booking) => booking.status !== 3),
    );

    return {
      revenue: totalRevenue,
      pipe: totalPipe,
      deals: totalBookings,
      booked: countBooked,
    };
  }

  async getContactStats(contactId: string) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
      include: {
        bookings: {
          include: {
            documents: true,
            quoteEdits: {
              include: {
                quote: true,
              },
            },
          },
        },
      },
    });

    let totalBookings = 0;
    let countBooked = 0;
    let totalRevenue = 0;
    let totalPipe = 0;

    const completedBookings = contact.bookings.filter(
      (booking) => booking.status === 3,
    );

    totalBookings += contact.bookings.filter(
      (b) =>
        b.status !== 3 && b.signedAt === null && b.contractComplete === false,
    ).length;
    countBooked += completedBookings.length;
    totalRevenue += completedBookings.reduce(
      (acc, booking) => acc + booking.total,
      0,
    );
    totalPipe += getPipe(
      contact.bookings.filter((booking) => booking.status !== 3),
    );

    return {
      revenue: totalRevenue,
      pipe: totalPipe,
      deals: totalBookings,
      booked: countBooked,
    };
  }

  async getBrandStats(brandId: string) {
    const brand = await this.prisma.brand.findUnique({
      where: {
        id: brandId,
      },
      include: {
        bookings: {
          include: {
            documents: true,
            quoteEdits: {
              include: {
                quote: true,
              },
            },
          },
        },
      },
    });

    let totalBookings = 0;
    let countBooked = 0;
    let totalRevenue = 0;
    let totalPipe = 0;

    const completedBookings = brand.bookings.filter(
      (booking) => booking.status === 3,
    );

    totalBookings += brand.bookings.filter(
      (b) =>
        b.status !== 3 && b.signedAt === null && b.contractComplete === false,
    ).length;
    countBooked += completedBookings.length;
    totalRevenue += completedBookings.reduce(
      (acc, booking) => acc + booking.total,
      0,
    );
    totalPipe += getPipe(
      brand.bookings.filter((booking) => booking.status !== 3),
    );

    return {
      revenue: totalRevenue,
      pipe: totalPipe,
      deals: totalBookings,
      booked: countBooked,
    };
  }

  async getUnitStats(unitId) {
    const unit = await this.prisma.unit.findUnique({
      where: {
        id: unitId,
      },
      include: {
        bookings: {
          include: {
            documents: true,
            quoteEdits: {
              include: {
                quote: true,
              },
            },
          },
        },
      },
    });

    let totalBookings = 0;
    let countBooked = 0;
    let totalRevenue = 0;
    let totalPipe = 0;

    const completedBookings = unit?.bookings?.filter(
      (booking) => booking.status === 3,
    );

    totalBookings += unit.bookings.length;
    countBooked += completedBookings.length;
    totalRevenue += completedBookings.reduce(
      (acc, booking) => acc + booking.total,
      0,
    );
    totalPipe += getPipe(
      unit.bookings.filter((booking) => booking.status !== 3),
    );

    return {
      revenue: totalRevenue,
      pipe: totalPipe,
      deals: totalBookings,
      booked: countBooked,
    };
  }

  async getMonthRevenues(type: ReportingType, assetId: string, user) {
    const _reportingModel = new ReportingModel(this.prisma);
    return _reportingModel.getMonthRevenues(type, assetId, user);
  }

  async getTotalRevenue(companyId: string) {
    const _reportingModel = new ReportingModel(this.prisma);
    return _reportingModel.getTotalRevenue(undefined, companyId);
  }

  async getReports(user: UserPayload): Promise<ReportingStats> {
    const _reportingModel = new ReportingModel(this.prisma);

    const currentYear = new Date(Date.now()).getFullYear();
    const SpecialtyLeasingPerformance =
      await _reportingModel.getSpecialtyLeasingPerformance(user);
    const AverageLeasingTime = await _reportingModel.getAverageLeasingTime();
    const TurnoverByAsset = await _reportingModel.getTurnoverByAsset();
    const SpecialtyDeals = await _reportingModel.getDealsByType([
      'PROPOSAL',
      'MEDIA',
    ]);
    const TurnoverByMix = await _reportingModel.getTurnoverByMix();
    const RevenueStandVSMedia = await _reportingModel.getRevenueStandVSMedia(
      currentYear,
    );
    const RevenueStand = await _reportingModel.getRevenueStand(currentYear);
    const RevenueMedia = await _reportingModel.getRevenueMedia(currentYear);
    const RevenueStandsEvolution =
      await _reportingModel.getRevenueStandsEvolution();
    const RevenueMediaEvolution =
      await _reportingModel.getRevenueMediaEvolution();

    return {
      SpecialtyLeasingPerformance,
      AverageLeasingTime,
      TurnoverByAsset,
      SpecialtyDeals,
      TurnoverByMix,
      RevenueStandVSMedia,
      RevenueStand,
      RevenueMedia,
      RevenueStandsEvolution,
      RevenueMediaEvolution,
    };
  }
}
