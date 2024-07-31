import { v4 as uuidv4 } from 'uuid';
import { init } from '@paralleldrive/cuid2';
import moment from 'moment';
import { Booking } from 'src/booking/entities/booking.entity';
import { PrismaClient } from '@prisma/client';
import { toUtc } from '../common/decorators/to-utc-date.decorator';

export interface ICreateBooking {
  brandId: string;
  companyId: string;
  contactId: string;
  unit: { id: string; unitId: string; surface: number; price: number }[];
  dateFrom: Date;
  dateTo: Date;
  type: string;
  creatorId: string;
}

export interface ICreateDocument {
  name?: string;
  dataObj?: string;
  label?: string;
  filePath: string;
  type: string;
  companyId?: string;
  quoteId?: string;
  bookingId?: string;
  isValidated?: boolean;
  attachTo: string;
}

export class ManualBooking {
  data: ICreateBooking;
  prisma: PrismaClient;

  constructor(prisma: PrismaClient, data: ICreateBooking) {
    this.data = data;
    this.prisma = prisma;
  }

  getTotal(dateFrom: Date, dateTo: Date, prices: number[]) {
    const periodInMonths = Math.abs(
      Math.ceil(moment(dateTo).diff(dateFrom, 'months')),
    );

    const total = Math.round(
      prices.reduce((totalTTC, price) => {
        return totalTTC + price + (price / 100) * 20;
      }, 0),
    );

    return Math.round(total * periodInMonths);
  }

  async createBooking(): Promise<Booking> {
    const total = this.data.unit.reduce((p, c) => p + c.price, 0);

    const booking = await this.prisma.booking.create({
      data: {
        units: {
          connect: this.data.unit.map((u) => {
            return {
              id: u.id,
            };
          }),
        },
        status: 3,
        isManual: true,
        type: this.data.type,
        dateFrom: toUtc(this.data.dateFrom),
        dateTo: toUtc(this.data.dateTo),
        brandId: this.data.brandId,
        companyId: this.data.companyId,
        contactId: this.data.contactId,
        creatorId: this.data.creatorId,
        proposalSent: true,
        proposalSentAt: new Date(),
        signedAt: new Date(),
        validatedAt: new Date(),
        contractComplete: true,
        contractCompletedAt: new Date(),
        total,
      },
    });

    await this.prisma.proposalEdit.createMany({
      data: this.data.unit.map((u) => {
        return {
          bookingId: booking.id,
          creatorId: this.data.creatorId,
          unitId: u.unitId,
          unitSurface: u.surface,
          unitPrice: u.price,
        };
      }),
    });

    const updatedBookingWithEdits = await this.getUpdatedBooking(booking.id);

    const company = await this.prisma.company.findUnique({
      where: {
        id: this.data.companyId,
      },
    });

    // if (this.data.type === 'HOT') {
    //   const periodInYears = Math.abs(
    //     Math.ceil(moment(this.data.dateTo).diff(this.data.dateFrom, 'years')),
    //   );

    //   const dataObj = {
    //     companyActivity: company.description,
    //     'livraison du local': moment(this.data.dateTo).format('yy-mm-dd'),
    //     rent: Array(periodInYears).fill(total),
    //     common: Array(periodInYears).fill(50),
    //     indexPercent: '10',
    //     monthOne: '2',
    //     monthTwo: '3',
    //     tax: 10.5,
    //     otherTax: 20.0,
    //     pilotage: 10000,
    //     marketing: 10000,
    //     sousLocation: 'Le Preneur ne peut sous-louer tout ou partie du Local.',
    //     gerance:
    //       'Le Preneur ne peut donner en gérance libre son fonds de commerce.',
    //     cession:
    //       "Le Preneur ne peut céder ses droits au Bail sauf à l'acquéreur de son fonds de commerce\n(Contrat hors contexte de la loi 49-16)",
    //     droit:
    //       "Le Bailleur bénéficie, pendant toute la durée du Bail, d'un droit de préemption portant sur\nle fonds de commerce(s'il existe).",
    //     conditions:
    //       'Le Bailleur devra préparer un local qui sera livré en brut de béton, fluides en attentes et<br>vitrines non posées.',
    //   };
    // } else {
    // }
    const updatedBooking = await this.getUpdatedBooking(booking.id);

    const dataHistory = {
      action: `NEW ${this.data.type} CREATED`,
      contactBookingId: booking.id,
    };

    this.createHistory(dataHistory, this.data.contactId);

    if (this.data.type !== 'HOT') {
      const dataEdits = this.data.unit.map((u) => {
        return {
          unitId: u.unitId,
          unitPrice: u.price,
          unitSurface: u.surface,
          dateFrom: toUtc(this.data.dateFrom),
          dateTo: toUtc(this.data.dateTo),
        };
      });

      await this.createQuote(updatedBooking, dataEdits);
    }

    return await this.prisma.booking.findUnique({
      where: {
        id: booking.id,
      },
    });
  }

  private async createQuote(
    booking: Booking,
    dataEdits: {
      unitId: string;
      unitPrice: number;
      unitSurface: number;
      dateFrom: Date;
      dateTo: Date;
    }[],
  ) {
    const length = 4;
    const genQuoteId = init({ length });

    const total = this.data.unit.reduce((p, c) => p + c.price, 0);

    const quoteIdPrefix = booking.company.name.substr(0, 2).toUpperCase();
    const quoteId = `${quoteIdPrefix}-${genQuoteId().toUpperCase()}`;

    await this.prisma.quote.create({
      data: {
        id: quoteId,
        total,
        notes: '',
        creator: { connect: { id: this.data.creatorId } },
        isValidated: true,
        status: 3,
      },
    });

    await this.prisma.quoteEdit.createMany({
      data: dataEdits.map((edit) => {
        return {
          dateFrom: toUtc(edit.dateFrom),
          dateTo: toUtc(edit.dateFrom),
          quoteId,
          bookingId: booking.id,
          creatorId: this.data.creatorId,
          ...edit,
        };
      }),
    });
  }

  private async getUpdatedBooking(createdBookingId: string): Promise<any> {
    return await this.prisma.booking.findUnique({
      where: {
        id: createdBookingId,
      },
      include: {
        quoteEdits: {
          include: {
            creator: true,
            quote: true,
            booking: true,
          },
        },
        proposalEdits: {
          include: {
            creator: true,
            booking: {
              include: {
                units: {
                  include: {
                    features: true,
                  },
                },
              },
            },
          },
        },
        documents: true,
        prospect: {
          include: {
            brands: {
              include: {
                companies: {
                  include: {
                    companyGroup: true,
                  },
                },
              },
            },
          },
        },
        company: true,
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
    });
  }

  private async createHotPdf(booking: Booking, dataObj: string) {
    const fileName = uuidv4();

    const docData = {
      name: 'Hot',
      label: 'HOT',
      type: 'HOT',
      dataObj,
      filePath: `/uploads/docTemplates/HOT-${fileName}.pdf`,
      bookingId: booking.id,
      attachTo: 'booking',
    };

    const createdDocument = await this.createDocument(docData);
    return createdDocument;
  }

  private async createOfferPdf(booking: Booking) {
    const fileName = uuidv4();

    const docData = {
      name: 'Proposition',
      label: 'PROPOSAL',
      type: 'PROPOSAL',
      filePath: null,
      bookingId: booking.id,
      attachTo: 'booking',
    };

    const createdDocument = await this.createDocument(docData);

    return createdDocument;
  }

  private async createDocument(docData: ICreateDocument): Promise<any> {
    const { attachTo, type, companyId, bookingId, quoteId, ...dataF } = docData;

    let toConnect;

    const companyConnect = {
      company: {
        connect: {
          id: companyId,
        },
      },
    };

    const bookingConnect = {
      booking: {
        connect: {
          id: bookingId,
        },
      },
    };

    const quoteConnect = {
      quote: {
        connect: {
          id: quoteId,
        },
      },
    };

    switch (attachTo) {
      case 'company':
        toConnect = companyConnect;
        break;
      case 'booking':
        toConnect = bookingConnect;
        break;
      case 'quote':
        toConnect = quoteConnect;
        break;
    }

    const createdDocument = await this.prisma.document.create({
      data: {
        type,
        ...dataF,
        ...toConnect,
        creator: { connect: { id: this.data.creatorId } },
      },
    });

    return createdDocument;
  }

  private async createHistory(dataHistory, contactId): Promise<any> {
    await this.prisma.history.create({
      data: {
        action: dataHistory.action,
        creator: { connect: { id: this.data.creatorId } },
        booking: {
          connect: {
            id: dataHistory.contactBookingId,
          },
        },
        contact: {
          connect: {
            id: contactId,
          },
        },
      },
    });
  }
}
