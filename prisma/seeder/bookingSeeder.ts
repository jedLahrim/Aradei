import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { init } from '@paralleldrive/cuid2';
import { Booking } from 'src/booking/entities/booking.entity';

const prisma = new PrismaClient();

interface ICreateBooking {
  brandId: string;
  companyId: string;
  id: string;
  unitId: string;
  surface: number;
  price: number;
  dateFrom: Date;
  dateTo: Date;
  type: 'MEDIA' | 'PROPOSAL' | 'HOT';
  retailCenterId: string;
}

interface ICreateDocument {
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
  retailCenterId: string;
}

export class BookingSeeder {
  static async createBooking(data: ICreateBooking): Promise<any> {
    const brand = await prisma.brand.findFirst({
      where: {
        id: data.brandId,
      },
      include: {
        contacts: true,
      },
    });

    const contact = brand.contacts[0];

    const booking = await prisma.booking.create({
      data: {
        units: {
          connect: {
            id: data.id,
          },
        },
        status: 3,
        type: data.type,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo,
        brandId: data.brandId,
        companyId: data.companyId,
        contactId: contact.id,
        creatorId: '000000000000',
      },
    });

    const proposalEdits = [
      {
        unitId: data.unitId,
        unitSurface: data.surface,
        unitPrice: data.price,
      },
    ];
    const editData = proposalEdits.map((edit) => ({
      booking: { connect: { id: booking.id } },
      creator: { connect: { id: '000000000000' } },
      ...edit,
    }));

    await Promise.all(
      editData.map(async (edit) => {
        const bookingEdit = await prisma.proposalEdit.create({
          data: {
            ...edit,
          },
        });

        return bookingEdit;
      }),
    );
    const updatedBookingWithEdits = await this.getUpdatedBooking(booking.id);

    if (data.type === 'HOT') {
      const dataObj = {
        companyActivity: 'Company Activity',
        'livraison du local': '2023-12-01',
        rent: [200, 200, 200],
        common: [50, 50, 50],
        indexPercent: '10',
        monthOne: '2',
        monthTwo: '3',
        tax: 10.5,
        otherTax: 20.0,
        pilotage: 10000,
        marketing: 10000,
        sousLocation: 'Le Preneur ne peut sous-louer tout ou partie du Local.',
        gerance:
          'Le Preneur ne peut donner en gérance libre son fonds de commerce.',
        cession:
          "Le Preneur ne peut céder ses droits au Bail sauf à l'acquéreur de son fonds de commerce\n(Contrat hors contexte de la loi 49-16)",
        droit:
          "Le Bailleur bénéficie, pendant toute la durée du Bail, d'un droit de préemption portant sur\nle fonds de commerce(s'il existe).",
        conditions:
          'Le Bailleur devra préparer un local qui sera livré en brut de béton, fluides en attentes et<br>vitrines non posées.',
      };
      await this.createHotPdf(
        updatedBookingWithEdits,
        JSON.stringify(dataObj),
        data.retailCenterId,
      );
      await this.createOfferPdf(updatedBookingWithEdits, data.retailCenterId);
    } else {
      await this.createOfferPdf(updatedBookingWithEdits, data.retailCenterId);
    }
    const updatedBooking = await this.getUpdatedBooking(booking.id);

    const dataHistory = {
      action: `CREATED_${data.type}`,
      contactBookingId: booking.id,
    };

    this.createHistory(dataHistory, contact.id);

    const dataEdits = [
      {
        unitId: data.unitId,
        unitPrice: data.price,
        unitSurface: data.surface,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo,
      },
    ];

    await this.createQuote(updatedBooking, dataEdits);
  }

  private static async createQuote(booking: Booking, dataEdits) {
    const length = 4;
    const genQuoteId = init({ length });

    const total = Math.round(
      dataEdits.reduce((totalTTC, edit) => {
        return totalTTC + edit.unitPrice + (edit.unitPrice / 100) * 20;
      }, 0),
    );

    const quoteIdPrefix = booking.company.name.substr(0, 2).toUpperCase();
    const quoteId = `${quoteIdPrefix}-${genQuoteId().toUpperCase()}`;

    await prisma.quote.create({
      data: {
        id: quoteId,
        total,
        notes: '',
        creator: { connect: { id: '000000000000' } },
        isValidated: true,
        status: 3,
      },
    });

    await prisma.booking.update({
      where: {
        id: booking.id,
      },
      data: {
        signedAt: new Date(Date.now()),
        total,
      },
    });

    const editData = dataEdits.map((edit) => ({
      quoteId,
      bookingId: booking.id,
      creatorId: '000000000000',
      ...edit,
    }));

    await prisma.quoteEdit.createMany({
      data: [...editData],
    });
  }

  private static async getUpdatedBooking(
    createdBookingId: string,
  ): Promise<any> {
    return await prisma.booking.findUnique({
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

  private static async createHotPdf(booking: Booking, dataObj, retailCenterId) {
    const fileName = uuidv4();

    const docData = {
      name: 'Hot',
      label: 'HOT',
      type: 'HOT',
      dataObj,
      filePath: `/uploads/docTemplates/HOT-${fileName}.pdf`,
      bookingId: booking.id,
      attachTo: 'booking',
      retailCenterId,
    };

    const createdDocument = await this.createDocument(docData);
    return createdDocument;
  }

  private static async createOfferPdf(booking: Booking, retailCenterId) {
    const fileName = uuidv4();

    const docData = {
      name: 'Proposition',
      label: 'PROPOSAL',
      type: 'PROPOSAL',
      filePath: `/uploads/docTemplates/proposition-${fileName}.pdf`,
      bookingId: booking.id,
      attachTo: 'booking',
      retailCenterId,
    };

    const createdDocument = await this.createDocument(docData);

    return createdDocument;
  }

  private static async createDocument(docData: ICreateDocument): Promise<any> {
    const {
      attachTo,
      type,
      companyId,
      bookingId,
      quoteId,
      retailCenterId,
      ...dataF
    } = docData;

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

    const createdDocument = await prisma.document.create({
      data: {
        type,
        retailCenter: {
          connect: {
            id: retailCenterId,
          },
        },
        ...dataF,
        ...toConnect,
        creator: { connect: { id: '000000000000' } },
      },
    });

    return createdDocument;
  }

  private static async createHistory(dataHistory, contactId): Promise<any> {
    await prisma.history.create({
      data: {
        action: dataHistory.action,
        creator: { connect: { id: '000000000000' } },
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
