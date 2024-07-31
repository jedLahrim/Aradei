import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DocumentService } from '../document/document.service';
import { UserService } from '../user/user.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ConfirmQuoteDto } from './dto/confirm-quote.dto';
import * as path from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { createId, init } from '@paralleldrive/cuid2';
import { Booking } from './entities/booking.entity';
import { MailerService } from '../mailer/mailer.service';
import { ConfirmHOTDto } from './dto/confirm-hot.dto';
import { ConfirmContractDto } from './dto/confirm-contract.dto';
import { MediaProposalDto } from './dto/mediaProposal.dto';
import { validationKind } from '../enum/validationKind';
import { GetBookingsDto } from './dto/get-bookings.dto';
import { BookingList } from './entities/booking-list.entity';
import { ConfirmInstallationDto } from './dto/confirm-installation.dto';
import { RenewBookingDto } from './dto/renew-booking.dto';

import {
  CreateManualBookingDto,
  UpdateManualBookingDto,
} from './dto/create-manual-booking.dto';
import { ManualBooking } from 'src/utils/ManualBooking';
import { LeadStatus } from 'src/utils/enums/lead.enum';
import { SortType } from '../common/enums/sort-type.enum';
import { AppError } from '../common/error/app-error';
import {
  ERR_BOOKING_NOT_CREATED,
  ERR_BOOKING_NOT_UPDATED,
  ERR_DELETE_BOOKING,
  ERR_NOT_FOUND_BOOKING,
  ERR_NOT_FOUND_QUOTE,
  ERR_UNAUTHORIZED_DELETE,
} from '../common/error/error-code';
import { UserPayload } from '../auth/interface/user-payload';
import { Constant } from '../common/constant';
import { Prisma } from '@prisma/client';
import { ProposalEdit } from './entities/proposalEdit.entity';
import { GetQuotesDto } from './dto/get-quotes.dto';
import { ExportQuoteDto } from './dto/export-quote.dto';
import { RetailCenter } from '../retailCenter/entities/retailcenter.entity';
import { Quote } from './entities/quote.entity';
import { ExportedQuote } from './class/exported-quote';
import { Response } from 'express';
import { isEmpty } from '@nestjs/common/utils/shared.utils';
import { Parser } from 'json2csv';
import JSZip from 'jszip';
import { toUtc } from '../common/decorators/to-utc-date.decorator';
import moment from 'moment';

@Injectable()
export class BookingService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private mailer: MailerService,
    private documentService: DocumentService,
  ) {}

  async removeUnitFromBooking(bookingId: string, unitId: string) {
    await this.prisma.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        units: {
          disconnect: {
            id: unitId,
          },
        },
      },
    });

    return true;
  }

  async getAll(data: GetBookingsDto): Promise<BookingList> {
    const where: Prisma.BookingWhereInput = {};
    this._filterBookingsByWhere(data, where);
    const bookingTotal = await this.prisma.booking.count({ where: where });
    const bookings = (await this.prisma.booking.findMany({
      take: data.take,
      skip: data.skip,
      orderBy: {
        proposalSentAt: data.sortType ?? SortType.desc,
      },
      where: where,
      include: {
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
        documents: {
          include: {
            creator: true,
            validators: true,
            validation: {
              include: {
                creator: true,
                kind: {
                  include: {
                    rolesNeeded: true,
                  },
                },
              },
            },
            quote: true,
          },
        },
        validations: {
          include: {
            creator: true,
            kind: {
              include: {
                rolesNeeded: true,
              },
            },
          },
        },
        proposalEdits: {
          include: {
            booking: true,
            creator: true,
          },
        },
        quoteEdits: {
          include: {
            creator: true,
            booking: true,
            quote: {
              include: {
                document: true,
              },
            },
          },
        },
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
            mix: {
              include: {
                MixCategory: true,
              },
            },
            UnitsForecasts: true,
          },
        },
        creator: true,
        contract: true,
        company: {
          include: {
            documents: true,
          },
        },
        brand: {
          include: {
            contacts: true,
            companies: true,
          },
        },
      },
    })) as Booking[];

    return new BookingList(bookings, bookingTotal);
  }

  async getOne(bookingId: string, user: UserPayload) {
    const booking = await this.prisma.booking.findFirst({
      where: {
        id: bookingId,
      },
      include: {
        brand: {
          include: {
            contacts: true,
            companies: true,
          },
        },
        company: {
          include: {
            documents: {
              include: {
                validation: {
                  include: {
                    kind: {
                      include: {
                        rolesNeeded: true,
                      },
                    },
                    creator: true,
                  },
                },
                quote: true,
              },
            },
          },
        },
        prospect: {
          include: {
            brands: {
              include: {
                companies: {
                  include: {
                    documents: true,
                  },
                },
              },
            },
          },
        },
        validations: {
          include: {
            creator: true,
            kind: {
              include: {
                rolesNeeded: true,
              },
            },
          },
        },
        documents: {
          include: {
            validators: true,
            pages: true,
            creator: true,
            validation: {
              include: {
                creator: true,
                kind: {
                  include: {
                    rolesNeeded: true,
                  },
                },
              },
            },
            quote: true,
          },
        },
        contract: true,
        creator: true,
        validators: true,
        units: {
          include: {
            documents: true,
            UnitsForecasts: true,
            mix: true,
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
        quoteEdits: {
          include: {
            creator: true,
            booking: true,
            quote: {
              include: {
                document: true,
                validation: {
                  include: {
                    creator: true,
                    kind: {
                      include: {
                        rolesNeeded: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        proposalEdits: {
          include: {
            booking: true,
            creator: true,
          },
        },
        mediaProposals: {
          include: {
            booking: true,
            medias: true,
            creator: true,
            unit: {
              include: {
                features: true,
              },
            },
            validation: {
              include: {
                creator: true,
                kind: {
                  include: {
                    rolesNeeded: true,
                  },
                },
              },
            },
          },
        },
        invoiceEdits: {
          include: {
            creator: true,
            invoice: true,
          },
        },
      },
    });
    if (!booking)
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_BOOKING));
    return booking;
  }

  async deleteBooking(id: string, user: UserPayload) {
    if (![1, 5, 11].includes(user.level))
      throw new UnauthorizedException(new AppError(ERR_UNAUTHORIZED_DELETE));

    const booking = await this.prisma.booking.findUnique({
      where: {
        id,
      },
      include: {
        Notification: true,
        proposalEdits: true,
        invoiceEdits: true,
        mediaProposals: true,
        documents: {
          include: {
            pages: true,
          },
        },
        validations: true,
        histories: true,
        quoteEdits: {
          include: {
            quote: {
              include: {
                document: true,
              },
            },
          },
        },
      },
    });
    if (!booking) throw new NotFoundException(ERR_NOT_FOUND_BOOKING);
    try {
      const quotes = booking.quoteEdits?.map((qe) => qe.quoteId) ?? [];
      const quotesDocs =
        booking.quoteEdits
          ?.map((qe) => qe.quote?.document?.id)
          .filter((val) => !!val) ?? [];
      const quotesDocPaths =
        booking.quoteEdits
          ?.map((qe) => qe.quote?.document?.filePath)
          .filter((val) => !!val) ?? [];
      const quoteEdits = booking.quoteEdits?.map((qe) => qe.id) ?? [];
      const proposalEdits = booking.proposalEdits?.map((pe) => pe.id) ?? [];
      const mediaEdits = booking.mediaProposals?.map((pe) => pe.id) ?? [];
      const invoiceEdits = booking.invoiceEdits?.map((pe) => pe.id) ?? [];
      const validations =
        booking.validations?.map((validation) => validation.id) ?? [];
      const histories = booking.histories?.map((history) => history.id) ?? [];

      const pages =
        booking.documents?.flatMap((doc) =>
          doc.pages.flatMap((page) => page.id),
        ) ?? [];

      const docs = booking.documents?.map((doc) => doc.id) ?? [];
      const docPaths =
        booking.documents?.map((doc) => doc.filePath).filter((val) => !!val) ??
        [];

      const docIdsSet = new Set<string>([...docs, ...quotesDocs]);
      const docIdsPath = new Set<string>([...docPaths, ...quotesDocPaths]);

      const notifications = booking.Notification?.map((not) => not.id) ?? [];

      await this.prisma.notification.deleteMany({
        where: {
          id: {
            in: notifications,
          },
        },
      });

      await this.prisma.quote.deleteMany({
        where: {
          id: {
            in: quotes,
          },
        },
      });
      await this.prisma.quoteEdit.deleteMany({
        where: {
          id: {
            in: quoteEdits,
          },
        },
      });
      await this.prisma.proposalEdit.deleteMany({
        where: {
          id: {
            in: proposalEdits,
          },
        },
      });
      await this.prisma.mediaProposal.deleteMany({
        where: {
          id: {
            in: mediaEdits,
          },
        },
      });
      await this.prisma.invoiceEdit.deleteMany({
        where: {
          id: {
            in: invoiceEdits,
          },
        },
      });
      await this.prisma.page.deleteMany({
        where: {
          id: {
            in: pages,
          },
        },
      });
      await this.prisma.document.deleteMany({
        where: {
          id: {
            in: Array.from(docIdsSet),
          },
        },
      });
      await this.prisma.validation.deleteMany({
        where: {
          id: {
            in: validations,
          },
        },
      });
      await this.prisma.history.deleteMany({
        where: {
          id: {
            in: histories,
          },
        },
      });
      await this.prisma.booking.delete({
        where: {
          id,
        },
      });

      for (const filePath of Array.from(docIdsPath)) {
        if (fs.existsSync(path.join(__dirname, '../../../', filePath)))
          fs.unlinkSync(path.join(__dirname, '../../../', filePath));
      }
      return true;
    } catch (e) {
      throw new InternalServerErrorException(new AppError(ERR_DELETE_BOOKING));
    }
  }

  async sendInvoice(id: string, user: any) {
    const createdDoc = await this.documentService.createInvoicePdf(
      id,
      user,
      true,
    );

    const invoice = await this.prisma.invoice.update({
      where: {
        id,
      },
      data: {
        status: 2,
        sentAt: new Date(Date.now()),
        docId: createdDoc?.id,
      },
    });

    return invoice;
  }

  async updateManualBooking(
    data: UpdateManualBookingDto,
    user: UserPayload,
  ): Promise<Booking> {
    try {
      let booking: Booking;
      // begin transaction
      await this.prisma.$transaction(
        async (prisma) => {
          booking = await prisma.booking.update({
            where: {
              id: data.id,
            },
            include: {
              quoteEdits: {
                include: {
                  creator: true,
                  booking: true,
                  quote: true,
                },
              },
            },
            data: {
              brand: {
                connect: {
                  id: data.brandId,
                },
              },
              prospect: {
                connect: {
                  id: data.contactId,
                },
              },
              company: {
                connect: {
                  id: data.companyId,
                },
              },
              type: data.type,
              dateFrom: toUtc(data.dateFrom),
              dateTo: toUtc(data.dateTo),
              total: data.unit.price,
            },
          });
          await prisma.proposalEdit.updateMany({
            where: {
              bookingId: data.id,
            },
            data: {
              unitPrice: data.unit.price,
              unitSurface: data.unit.surface,
            },
          });
          await prisma.quoteEdit.updateMany({
            where: {
              bookingId: data.id,
            },
            data: {
              dateFrom: toUtc(data.dateFrom),
              dateTo: toUtc(data.dateTo),
              unitPrice: data.unit.price,
              unitSurface: data.unit.surface,
            },
          });

          const quoteId = booking.quoteEdits[0]?.quoteId;

          if (quoteId) {
            await prisma.quote.update({
              where: {
                id: quoteId,
              },
              data: {
                total: data.unit.price,
              },
            });
          }

          await prisma.brand.update({
            where: {
              id: data.brandId,
            },
            data: {
              status: LeadStatus.VALIDATED,
            },
          });
        },
        // 1min to wait for transaction to end until we optimise the files flow
        // { timeout: Constant.TRANSACTION_DEFAULT_TIMEOUT },
      );
      return this.prisma.booking.findFirst({ where: { id: booking.id } });
    } catch (e) {
      // Rollback in case of error
      console.error('Transaction failed', e);
      await this.prisma.$executeRaw`ROLLBACK`;
      throw new InternalServerErrorException(
        new AppError(ERR_BOOKING_NOT_UPDATED, e),
      );
    }
  }

  async createManualBooking(
    { unit, ...data }: CreateManualBookingDto,
    user: UserPayload,
  ) {
    const manualBooking = new ManualBooking(this.prisma, {
      ...data,
      unit: [unit],
      creatorId: user.id,
    });
    const booking = await manualBooking.createBooking();

    await this.prisma.brand.update({
      where: {
        id: data.brandId,
      },
      data: {
        status: LeadStatus.VALIDATED,
      },
    });

    return booking;
  }

  async create(data: CreateBookingDto, user: UserPayload): Promise<Booking> {
    const {
      units,
      contactId,
      brandId,
      companyId,
      proposalEdits,
      dataObj,
      ...dataF
    } = data;
    const name = uuidv4();
    let updatedBooking: Booking;
    try {
      await this.prisma.$transaction(
        async (prisma) => {
          const unitsIds = units.map((unit) => ({ id: unit }));

          const createdBooking = await this.prisma.booking.create({
            data: {
              ...dataF,
              creator: {
                connect: {
                  id: user.id,
                },
              },
              prospect: {
                connect: {
                  id: contactId,
                },
              },
              brand: {
                connect: {
                  id: brandId,
                },
              },
              company: {
                connect: {
                  id: companyId,
                },
              },
              units: {
                connect: [...unitsIds],
              },
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
                          documents: true,
                          features: true,
                        },
                      },
                    },
                  },
                },
              },
              brand: true,
              company: true,
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
              units: {
                include: {
                  unitLogoMetadata: true,
                  bookings: {
                    include: {
                      brand: true,
                    },
                  },
                  floor: {
                    include: {
                      commercialDocs: true,
                      units: {
                        include: {
                          unitLogoMetadata: true,
                          bookings: {
                            include: {
                              brand: true,
                            },
                          },
                        },
                      },
                      retailCenter: {
                        include: {
                          commercialDocs: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          });
          await this.prisma.brand.update({
            where: {
              id: brandId,
            },
            data: {
              status: LeadStatus.VALIDATED,
            },
          });

          const editData = proposalEdits?.map((edit) => ({
            booking: { connect: { id: createdBooking.id } },
            creator: {
              connect: {
                id: user.id,
              },
            },
            ...edit,
          }));

          const foundedProposalEdits = await Promise.all(
            editData?.map((edit) => {
              return this.prisma.proposalEdit.create({
                data: {
                  ...edit,
                },
                include: {
                  creator: true,
                  booking: true,
                },
              });
            }),
          );
          let offerPDF;
          let offerPresentationPDF;

          /*if (dataF.type === 'MEDIA') {

            } else */
          const booking = await this.prisma.booking.findUnique({
            where: {
              id: createdBooking.id,
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
              brand: true,
              company: true,
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
              units: {
                include: {
                  unitLogoMetadata: true,
                  bookings: {
                    include: {
                      brand: true,
                      documents: true,
                    },
                  },
                  documents: true,
                  floor: {
                    include: {
                      commercialDocs: true,
                      units: {
                        include: {
                          unitLogoMetadata: true,
                          specialities: {
                            include: {
                              units: true,
                            },
                          },
                          category: true,
                          features: true,
                          bookings: {
                            include: {
                              brand: true,
                              documents: true,
                            },
                          },
                        },
                      },
                      retailCenter: {
                        include: {
                          commercialDocs: true,
                          pictures: true,
                          floors: {
                            include: {
                              units: {
                                include: {
                                  specialities: { include: { units: true } },
                                  features: { include: { units: true } },
                                  bookings: {
                                    include: {
                                      brand: true,
                                      documents: true,
                                    },
                                  },
                                },
                              },
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
          if (createdBooking.units.length == 1)
            this._updateUnitSurface(booking, dataObj, foundedProposalEdits);
          if (dataF.type === 'HOT') {
            await this.documentService.createHotPdf(booking, dataObj, user);
            await this.documentService.createProposal(booking, user);
          } else {
            await this.documentService.createProposal(booking, user);
          }

          const dataHistory = {
            action: `CREATED_${dataF.type}`,
            contactBookingId: createdBooking.id,
          };

          // INSERT HISTORY
          await this.prisma.history.create({
            data: {
              action: dataHistory.action,
              creator: {
                connect: {
                  id: user.id,
                },
              },
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

          updatedBooking = await this.prisma.booking.findUnique({
            where: {
              id: createdBooking.id,
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
              brand: true,

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
        },
        // 1min to wait for transaction to end until we optimise the files flow
        { timeout: Constant.TRANSACTION_DEFAULT_TIMEOUT },
      );
      return updatedBooking;
    } catch (e) {
      // Rollback in case of error
      console.error('Transaction failed', e);
      await this.prisma.$executeRaw`ROLLBACK`;
      throw new InternalServerErrorException(
        new AppError(ERR_BOOKING_NOT_CREATED, e),
      );
    }
  }

  async renew(data: RenewBookingDto, user: UserPayload): Promise<Booking> {
    const {
      parentBookingId,
      dateFrom,
      dateTo,
      notes,
      surface,
      monthPrice,
      dataObj,
    } = data;

    const renewedBooking = await this.prisma.booking.findUnique({
      where: {
        id: parentBookingId,
      },
      include: {
        units: true,
        proposalEdits: true,
        documents: true,
      },
    });

    const unitsIds = renewedBooking.units.map((unit) => ({ id: unit.id }));
    const proposalEdits = renewedBooking.proposalEdits.map((edit) => ({
      unitId: edit.unitId,
      unitSurface:
        renewedBooking.type === 'PROPOSAL' ? data.surface : edit.unitSurface,
      unitPrice:
        renewedBooking.type === 'PROPOSAL' ? data.monthPrice : edit.unitPrice,
    }));

    const newCreatedBooking: CreateBookingDto = {
      units: unitsIds.map((unit) => unit.id),
      contactId: renewedBooking.contactId,
      brandId: renewedBooking.brandId,
      companyId: renewedBooking.companyId,
      proposalEdits: proposalEdits,
      type: renewedBooking.type,
      dataObj,
      parentBookingId,
      dateFrom: toUtc(dateFrom),
      dateTo: toUtc(dateTo),
      notes,
      /*  dataObj:
        renewedBooking.type === 'HOT'
          ? renewedBooking.documents.find(
              (doc) =>
                (doc.type === 'HOT' && doc.isValidated) ||
                (doc.type === 'HOT' && doc.sent) ||
                doc.type === 'HOT',
            ).dataObj
          : null*/
    };
    await this.prisma.booking.update({
      where: {
        id: parentBookingId,
      },
      data: {
        renewalSent: true,
      },
    });
    return this.create(newCreatedBooking, user);
  }

  async sendQuote(id: string, user: UserPayload) {
    // create pdf and send email
    const createdDoc = await this.documentService.createQuotePdf(
      id,
      user,
      true,
    );

    return this.prisma.quote.update({
      where: {
        id,
      },
      data: {
        status: 2,
        sentAt: new Date(Date.now()),
        docId: createdDoc?.id,
      },
    });

    // return quote;
  }

  async createInvoiceEdit(data: any, user: any): Promise<string | null> {
    const { notes, bookingId, type, ...dataEdits } = data;
    const total = Math.round(
      dataEdits.edits?.reduce((totalTTC, edit) => {
        return totalTTC + edit.unitPrice + (edit.unitPrice / 100) * 20;
      }, 0),
    );

    const bookingInfos = await this.prisma.booking.findUnique({
      where: {
        id: bookingId,
      },
      include: {
        prospect: true,
        company: true,
      },
    });

    const quoteIdPrefix = bookingInfos.company.name.substr(0, 2).toUpperCase();
    // const quoteId = `${quoteIdPrefix}-${genQuoteId().toUpperCase()}`;

    const numberOfQuotes = (await this.prisma.invoice.count()) + 1;
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedNumberOfQuotes = String(numberOfQuotes).padStart(2, '0');
    const invoiceId = `${quoteIdPrefix}${day}${month}${String(
      currentDate.getFullYear(),
    ).slice(
      -2,
    )}/F${formattedNumberOfQuotes}_${currentDate.getFullYear()}`.toUpperCase();

    await this.prisma.invoice.create({
      data: {
        id: invoiceId,
        total,
        notes,
        creator: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    const editData = dataEdits.edits?.map((edit) => ({
      invoiceId,
      bookingId,
      creatorId: user.id,
      // type,
      ...edit,
    }));

    const createdEdit = await this.prisma.invoiceEdit.createMany({
      data: [...editData],
    });

    return invoiceId;
  }

  async createQuoteEdit(data: any, user: UserPayload): Promise<string | null> {
    const editId = createId();
    const { notes, bookingId, type, ...dataEdits } = data;
    const length = 4;
    const genQuoteId = init({ length });

    const total = Math.round(
      dataEdits.edits?.reduce(
        (totalTTC: number, edit: { unitPrice: number }) => {
          return totalTTC + edit.unitPrice + (edit.unitPrice / 100) * 20;
        },
        0,
      ),
    );

    const bookingInfos = await this.prisma.booking.findUnique({
      where: {
        id: bookingId,
      },
      include: {
        brand: true,
        company: true,
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
      },
    });

    const quoteIdPrefix = bookingInfos.company.name.substr(0, 2).toUpperCase();
    const quoteId = `${quoteIdPrefix}-${genQuoteId().toUpperCase()}`;

    await this.prisma.quote.create({
      data: {
        id: quoteId,
        total,
        notes,
        creator: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    const editData = dataEdits.edits?.map((edit) => ({
      quoteId,
      bookingId,
      creatorId: user.id,
      // type,
      ...edit,
    }));

    const createdEdit = await this.prisma.quoteEdit.createMany({
      data: [...editData],
    });

    return quoteId;
  }

  async confirmQuote(data: ConfirmQuoteDto, user: UserPayload) {
    const {
      proposalId,
      quoteId,
      signedQuoteFilePath,
      paiementQuoteFilePath,
      purchasedOrderFilePath,
      signedGeneralConditionsFilePath,
    } = data;
    const now = new Date().getTime();
    const existingBooking = await this.prisma.booking.findUnique({
      where: {
        id: proposalId,
      },
      include: {
        units: true,
        mediaProposals: {
          include: {
            medias: true,
            creator: true,
            unit: {
              include: {
                features: true,
              },
            },
            validation: {
              include: {
                creator: true,
                kind: {
                  include: {
                    rolesNeeded: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!existingBooking) throw new NotFoundException(ERR_NOT_FOUND_BOOKING);
    const updatedQuote = await this.prisma.quote.update({
      where: {
        id: quoteId,
      },
      data: {
        isValidated: true,
        status: 3,
      },
      include: {
        edits: true,
      },
    });
    if (!updatedQuote) throw new NotFoundException(ERR_NOT_FOUND_QUOTE);
    if (signedQuoteFilePath) {
      this.documentService.createDocument(
        {
          name: 'Devis signé',
          label: 'SIGNED_QUOTE',
          filePath: signedQuoteFilePath,
          type: 'SIGNED_QUOTE',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }
    if (paiementQuoteFilePath) {
      this.documentService.createDocument(
        {
          name: 'Paiement du devis',
          label: 'PAIED_QUOTE',
          filePath: paiementQuoteFilePath,
          type: 'PAIED_QUOTE',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }
    if (purchasedOrderFilePath) {
      this.documentService.createDocument(
        {
          name: 'Bon de commande',
          label: 'PURCHASE_ORDER',
          filePath: purchasedOrderFilePath,
          type: 'PURCHASE_ORDER',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }

    if (signedGeneralConditionsFilePath) {
      this.documentService.createDocument(
        {
          name: 'Cgv signées',
          label: 'SIGNED_CGV',
          filePath: signedGeneralConditionsFilePath,
          type: 'SIGNED_CGV',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }

    const parentBookingId = existingBooking.parentBookingId;
    if (parentBookingId) {
      const parentBooking = await this.prisma.booking.findUnique({
        where: {
          id: parentBookingId,
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
          brand: true,
          company: true,
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
          units: {
            include: {
              floor: {
                include: {
                  commercialDocs: true,
                  retailCenter: {
                    include: {
                      commercialDocs: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      const updatedParentBooking = await this.prisma.booking.update({
        where: {
          id: parentBooking?.id,
        },
        data: {
          renewed: parentBooking?.renewalSent ?? true,
        },
      });
    }

    const updateData: any = {
      signedAt: new Date(),
      dateFrom: toUtc(updatedQuote?.edits[0]?.dateFrom),
      dateTo: toUtc(updatedQuote?.edits[0]?.dateTo),
      total: updatedQuote.total,
    };

    /*if (existingBooking.type === 'MEDIA') {
      const unitIDs = existingBooking.units.map((unit) => unit.id) ?? [];
      const allUnitsHaveValidatedProposal = unitIDs.every((unitId) => {
        return existingBooking.mediaProposals.some((proposal) => {
          return (
            proposal.unit.id === unitId &&
            proposal.validation &&
            proposal.validation.isComplete
          );
        });
      });
      if (allUnitsHaveValidatedProposal) {
        updateData.status = 3;
      }
    } else {
      updateData.status = 3;
    }*/
    updateData.status = 3;

    const updatedBooking = await this.prisma.booking.update({
      where: {
        id: proposalId,
      },
      data: updateData,
      include: {
        brand: true,
        company: true,
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
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
        documents: true,
      },
    });

    if (signedQuoteFilePath) {
      await this.mailer.sendQuoteConfirm(updatedBooking, user);
    }

    return updatedBooking;
  }

  async confirmHOT(data: ConfirmHOTDto, user: UserPayload) {
    const { proposalId, documentId, signedHOTFilePath } = data;
    const createdDocument = await this.documentService.createDocument(
      {
        name: 'HOT signé',
        label: 'SIGNED_HOT',
        filePath: signedHOTFilePath,
        type: 'SIGNED_HOT',
        bookingId: proposalId,
        attachTo: 'booking',
      },
      user,
    );

    const document = await this.prisma.document.update({
      where: {
        id: documentId,
      },
      data: {
        needsValidation: false,
        isValidated: true,
        updatedAt: new Date(),
      },
      include: {
        booking: {
          include: {
            brand: true,
            company: true,
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
        },
      },
    });

    await this.mailer.sendHOTValidationNotification(user, document.bookingId);

    return createdDocument;
  }

  async confirmInvoice(data: ConfirmQuoteDto, user) {
    const {
      proposalId,
      quoteId,
      signedQuoteFilePath,
      paiementQuoteFilePath,
      signedGeneralConditionsFilePath,
    } = data;
    const now = new Date().getTime();

    if (signedQuoteFilePath) {
      await this.documentService.createDocument(
        {
          name: 'facture signé',
          label: 'SIGNED_INVOICE',
          filePath: signedQuoteFilePath,
          type: 'SIGNED_INVOICE',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }
    if (paiementQuoteFilePath) {
      await this.documentService.createDocument(
        {
          name: 'Paiement du facture',
          label: 'PAIED_INVOICE',
          filePath: paiementQuoteFilePath,
          type: 'PAIED_INVOICE',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }

    if (signedGeneralConditionsFilePath) {
      await this.documentService.createDocument(
        {
          name: 'Cgv signées',
          label: 'SIGNED_CGV',
          filePath: signedGeneralConditionsFilePath,
          type: 'SIGNED_CGV',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }
    const updatedQuote = await this.prisma.invoice.update({
      where: {
        id: quoteId,
      },
      data: {
        isValidated: true,
        status: 3,
      },
      include: {
        edits: true,
      },
    });

    const updateData: any = {
      signedAt: new Date(Date.now()),
      dateFrom: toUtc(updatedQuote?.edits[0]?.dateFrom),
      dateTo: toUtc(updatedQuote?.edits[0]?.dateTo),
      total: updatedQuote.total,
    };

    updateData.status = 3;

    const updatedBooking = await this.prisma.booking.update({
      where: {
        id: proposalId,
      },
      data: updateData,
      include: {
        prospect: true,
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
        documents: true,
      },
    });

    await this.mailer.sendQuoteConfirm(updatedBooking, user);

    return updatedBooking;
  }

  async confirmInstallation(data: ConfirmInstallationDto, user: UserPayload) {
    const { proposalId, documentId, signedInstallationFilePath } = data;
    const createdDocument = await this.documentService.createDocument(
      {
        name: 'Installatrion signé',
        label: 'SIGNED_INSTALLATION',
        filePath: signedInstallationFilePath,
        type: 'SIGNED_INSTALLATION',
        bookingId: proposalId,
        attachTo: 'booking',
      },
      user,
    );
    await this.mailer.sendDocument(user, createdDocument.id);

    const document = await this.prisma.document.update({
      where: {
        id: documentId,
      },
      data: {
        needsValidation: false,
        isValidated: true,
        updatedAt: new Date(),
      },
      include: {
        booking: {
          include: {
            brand: true,
            company: true,
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
        },
      },
    });

    return createdDocument;
  }

  async confirmContract(data: ConfirmContractDto, user: UserPayload) {
    const {
      proposalId,
      documentId,
      signedContractFilePath,
      paiementContractFilePath,
    } = data;

    if (!signedContractFilePath && !paiementContractFilePath) {
      return { err: 'No files provided.' };
    }

    const today = new Date();

    if (signedContractFilePath) {
      await this.documentService.createDocument(
        {
          name: 'Contrat signé',
          label: 'SIGNED_CONTRACT',
          filePath: signedContractFilePath,
          type: 'SIGNED_CONTRACT',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }
    if (paiementContractFilePath) {
      await this.documentService.createDocument(
        {
          name: 'Contrat: fichier du paiement',
          label: 'PAYMENT_CONTRACT',
          filePath: paiementContractFilePath,
          type: 'PAYMENT_CONTRACT',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }

    const document = await this.prisma.document.update({
      where: {
        id: documentId,
      },
      data: {
        needsValidation: false,
        isValidated: true,
        updatedAt: today,
      },
    });

    const [paymentContractExists, signedContractExists] = await Promise.all([
      await this.prisma.document.findFirst({
        where: {
          bookingId: proposalId,
          type: 'PAYMENT_CONTRACT',
        },
      }),
      await this.prisma.document.findFirst({
        where: {
          bookingId: proposalId,
          type: 'SIGNED_CONTRACT',
        },
      }),
    ]);
    if (signedContractExists && !paymentContractExists) {
      await this.mailer.sendDocument(user, signedContractExists.id);
    }
    let confirmedBooking;

    if (paymentContractExists && signedContractExists) {
      const validDoc = await this.prisma.validation.findFirst({
        where: {
          bookingId: proposalId,
          kindId: {
            in: [validationKind.FICHE_COM, validationKind.FICHE_COM_LT],
          },
        },
        include: {
          document: true,
        },
      });
      const docData = JSON.parse(validDoc.document.dataObj);
      let total = null;
      if (validDoc.kindId === validationKind.FICHE_COM) {
        total = docData ? parseFloat(docData?.rent) || 0 : null;
      } else if (validDoc.kindId === validationKind.FICHE_COM_LT) {
        total = docData
          ? (parseFloat(docData?.iet?.secDepositText) || 0) +
            parseFloat(docData?.iet?.rtm || 0) * 1.2 +
            parseFloat(docData?.iet?.marketing || 0) * 1.2
          : null;
      }

      confirmedBooking = await this.prisma.booking.update({
        where: {
          id: proposalId,
        },
        data: {
          status: 3,
          total,
          // signedAt: new Date(Date.now()),
          contractComplete: true,
          contractCompletedAt: today,
        },
      });
      const parentBookingId = confirmedBooking.parentBookingId;
      if (parentBookingId) {
        const parentBooking = await this.prisma.booking.findUnique({
          where: {
            id: parentBookingId,
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
            brand: true,
            company: true,
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
            units: {
              include: {
                floor: {
                  include: {
                    commercialDocs: true,
                    retailCenter: {
                      include: {
                        commercialDocs: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });
        if (!parentBooking)
          throw new NotFoundException(new AppError(ERR_NOT_FOUND_BOOKING));
        const updatedParentBooking = await this.prisma.booking.update({
          where: {
            id: parentBooking.id,
          },
          data: {
            renewed: parentBooking.renewalSent ?? true,
          },
        });
      }
    } else {
      confirmedBooking = await this.prisma.booking.findFirst({
        where: {
          id: proposalId,
        },
      });
    }
    return confirmedBooking;
  }

  async confirmConvention(data: ConfirmContractDto, user: UserPayload) {
    const {
      proposalId,
      documentId,
      signedContractFilePath,
      paiementContractFilePath,
    } = data;

    const today = new Date();
    if (signedContractFilePath) {
      this.documentService.createDocument(
        {
          name: 'convention signé',
          label: 'SIGNED_CONVENTION',
          filePath: signedContractFilePath,
          type: 'SIGNED_CONVENTION',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }
    if (paiementContractFilePath) {
      this.documentService.createDocument(
        {
          name: 'convention: fichier du paiement',
          label: 'PAYMENT_CONVENTION',
          filePath: paiementContractFilePath,
          type: 'PAYMENT_CONVENTION',
          bookingId: proposalId,
          attachTo: 'booking',
        },
        user,
      );
    }

    const document = await this.prisma.document.update({
      where: {
        id: documentId,
      },
      data: {
        needsValidation: false,
        isValidated: true,
        updatedAt: today,
      },
    });

    const convData = JSON.parse(document.dataObj) || {};
    const amount = parseFloat(convData?.amount) || 0;

    const confirmedBooking = await this.prisma.booking.update({
      where: {
        id: proposalId,
      },
      data: {
        status: 3,
        total: amount,
        // signedAt: new Date(Date.now()),
        contractComplete: true,
        contractCompletedAt: today,
      },
    });

    return confirmedBooking;
  }

  async getPipe(type: string): Promise<number> {
    const weekDays = [0, 1, 2, 3, 4, 5, 6];
    const weekDates = [];

    weekDays.forEach((day) => {
      const inSeconds = day * 86400000;
      const pastDate = new Date(Date.now() - inSeconds);
      pastDate.setUTCHours(0, 0, 0, 0);
      weekDates.push(pastDate);
    });

    const bookings = await this.prisma.booking.findMany({
      where: {
        type,
      },
      include: {
        documents: true,
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
        quoteEdits: {
          include: {
            creator: true,
            quote: true,
          },
        },
        proposalEdits: {
          include: {
            creator: true,
          },
        },
        contract: true,
        brand: true,
        company: true,
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
        creator: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    let totalForBooking = 0;

    bookings.forEach((booking) => {
      if (
        booking.quoteEdits[0]?.quote.total &&
        booking.quoteEdits[0]?.quote.status === 2
      ) {
        totalForBooking += booking.quoteEdits[0]?.quote.total;
      }
    });

    return totalForBooking;
  }

  async getRevenue(type: string): Promise<number> {
    const dateQueryLte = new Date();
    const dateQueryGte = new Date(Date.now() - 518400000);
    const weekDays = [0, 1, 2, 3, 4, 5, 6];
    const weekDates = [];

    weekDays.forEach((day) => {
      const inSeconds = day * 86400000;
      const pastDate = new Date(Date.now() - inSeconds);
      pastDate.setUTCHours(0, 0, 0, 0);
      weekDates.push(pastDate);
    });

    const bookings = await this.prisma.booking.findMany({
      where: {
        status: 3,
        type,
        signedAt: {
          lte: dateQueryLte,
          gte: dateQueryGte,
        },
      },
      include: {
        documents: true,
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
        contract: true,
        brand: true,
        company: true,
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
        creator: true,
      },
      orderBy: {
        createdAt: SortType.desc,
      },
    });

    function bookingDuration(from: any, to: any) {
      const fromDate = new Date(from);
      const toDate = new Date(to);

      const duration = toDate.getTime() - fromDate.getTime();

      return Math.ceil(duration / (1000 * 3600 * 24));
    }

    let totalForUnit = 0;

    bookings.forEach((booking) => {
      totalForUnit += booking?.units?.reduce((totalHT, unit) => {
        return totalHT + unit.monthPrice;
      }, 0);
    });

    return totalForUnit;
  }

  async getExpirations(days = 30, user: UserPayload) {
    const bookings = await this.prisma.booking.findMany({
      where: {
        status: 3,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        brand: true,
        company: true,
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
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
        creator: true,
        contract: true,
      },
    });

    const boundaryDate = new Date();
    const now = new Date().getTime();
    const expirationBoundary = boundaryDate.setDate(
      boundaryDate.getDate() + days,
    );
    const expirations = bookings.filter(
      (booking) =>
        booking.dateTo.getTime() > now &&
        booking.dateTo.getTime() <= expirationBoundary,
    );

    return expirations;
  }

  async getBookings(): Promise<Booking[] | null> {
    const bookings = await this.prisma.booking.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      include: {
        prospect: true,
        creator: true,
        units: {
          include: {
            mix: true,
          },
        },
        documents: true,
      },
    });

    return bookings;
  }

  async addMedia(data: MediaProposalDto, user: UserPayload): Promise<Booking> {
    const bookingMP = await this.prisma.mediaProposal.create({
      data: {
        booking: { connect: { id: data.bookingId } },
        unit: { connect: { id: data.unitId } },
        creator: { connect: { id: user.id } },
      },
    });
    const mediaPromise = data.media.map((media) => {
      const index = data.media.indexOf(media);
      return this.prisma.media.create({
        data: {
          mediaProposal: { connect: { id: bookingMP.id } },
          fileOrder: index,
          ...media,
        },
      });
    });
    await Promise.all(mediaPromise);
    const updatedBooking = await this.prisma.booking.findUnique({
      where: {
        id: data.bookingId,
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
        brand: true,
        company: true,
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
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
        mediaProposals: {
          include: {
            medias: true,
            creator: true,
            booking: true,
            unit: {
              include: {
                features: true,
              },
            },
          },
        },
      },
    });
    return updatedBooking;
  }

  async getQuotes(filter: GetQuotesDto) {
    const wherePrisma = this._filterQuotes(filter);
    const quotes = await this.prisma.quote.findMany({
      take: filter.take,
      skip: filter.skip,
      where: wherePrisma,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        edits: {
          include: {
            booking: {
              include: {
                documents: true,
                brand: true,
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
            },
          },
        },
      },
    });

    const total = await this.prisma.quote.count({
      where: wherePrisma,
    });

    return {
      quotes,
      total,
    };
  }

  async exportQuote(dto: ExportQuoteDto, res: Response): Promise<void> {
    const { ids } = dto;
    const quotes = await this.prisma.quote.findMany({
      where: {
        id: { in: ids },
      },
      include: {
        edits: {
          include: {
            booking: {
              include: {
                documents: true,
                brand: true,
                company: true,
                units: {
                  include: { floor: { include: { retailCenter: true } } },
                },
              },
            },
            creator: true,
          },
        },
      },
    });
    if (isEmpty(quotes))
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_QUOTE));
    const data = this._getExportedQuoteData(quotes, dto);
    const csvBuffer = this.createCsv(data);
    // const { quoteDocBuffers, quoteDocs } = await this._getQuoteDocs(quotes);
    const exportedAt = new Date().toISOString().replace(/:/g, '_');

    await this.prisma.quote.updateMany({
      where: {
        id: { in: ids },
      },
      data: {
        exportedAt: new Date(),
      },
    });

    await this._downloadCsv(
      res,
      `Squarefeet_Devis_${exportedAt}`,
      quotes,
      csvBuffer,
    );
  }

  createCsv(data: Array<ReturnType<ExportedQuote['create']>>) {
    const fields = Object.keys(data[0]).map((key) => {
      if (key.startsWith('Vide')) {
        return { label: 'Vide', value: key };
      } else if (key.startsWith('Net')) {
        return { label: 'Net', value: key };
      }
      return { value: key };
    });
    const json2csvParser = new Parser<typeof data>({
      fields,
      header: false,
    });
    let csv = json2csvParser.parse(data);
    csv = this._removeDoubleQuote(csv);
    // Convert string to Buffer
    return Buffer.from(csv, 'utf-8');
  }

  private _filterQuotes(filter: GetQuotesDto) {
    const wherePrisma: any = {
      edits: {
        some: {},
      },
    };

    if (filter.brandIds.length > 0) {
      wherePrisma.edits.some = {
        booking: {
          brandId: {
            in: filter.brandIds,
          },
        },
      };
    }

    if (filter.query) {
      if (!('booking' in wherePrisma.edits.some)) {
        wherePrisma.edits.some = {
          booking: {},
        };
      }

      wherePrisma.edits.some.booking = {
        brand: {
          name: {
            contains: filter.query,
          },
        },
        units: {
          some: {
            floor: {
              retailCenter: {
                name: {
                  contains: filter.query,
                },
              },
            },
          },
        },
      };
    }

    if (filter.status) {
      if (filter.status === 1) {
        wherePrisma.exportedAt = null;
      }
      if (filter.status === 2) {
        wherePrisma.exportedAt = null;
      }
      if (filter.status === 3) {
        wherePrisma.exportedAt = {
          not: null,
        };
      }
    }
    if (filter.bookingType) {
      wherePrisma.edits.some.booking = { type: filter.bookingType };
    }
    if (filter.filterDate) {
      wherePrisma.createdAt = {
        gte: moment(toUtc(filter.filterDate.from)).startOf('day').toDate(),
        lte: moment(toUtc(filter.filterDate.to)).endOf('day').toDate(),
      };
    }
    return wherePrisma;
  }

  private _filterBookingsByWhere(
    data: GetBookingsDto,
    where: Prisma.BookingWhereInput,
  ) {
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        switch (key) {
          case 'status':
            switch (value) {
              case 1:
                where.type = 'HOT';
                where.proposalSent = false;
                where.status = 1;
                break;
              case 2:
                where.type = 'PROPOSAL';
                where.proposalSent = false;
                where.status = 1;

                break;
              case 3:
                where.type = 'HOT';
                where.proposalSent = true;
                where.status = 1;

                break;
              case 4:
                where.type = 'PROPOSAL';
                where.proposalSent = true;
                where.status = 1;
                break;
              case 5:
                where.status = 2;
                break;
              case 6:
                where.status = 3;
                break;
            }
            break;
          case 'type':
            where.type = value;
            break;
          case 'company':
            where.company = {
              is: {
                id: value,
              },
            };
            break;
          case 'hasPayment':
            where.documents = {
              some: {
                type: 'INVOICE',
              },
            };
            break;
          case 'asset':
            where.units = {
              every: {
                floor: {
                  retailCenterId: value,
                },
              },
            };
            break;
          case 'brand':
            where.brand = {
              is: {
                id: value,
              },
            };
            break;
          case 'contact':
            where.prospect = {
              id: value,
            };
            break;
        }
      }
    });
  }

  private _updateUnitSurface(
    booking: Booking,
    dataObjString: string,
    proposalEdits: ProposalEdit[],
  ) {
    if (dataObjString) {
      const dataObj: any = JSON.parse(dataObjString);
      booking.proposalEdits.push(...proposalEdits);
      booking.proposalEdits.map(
        (proposalEdit) => (proposalEdit.unitSurface = Number(dataObj.surface)),
      );
    }
  }

  private _getExportedQuoteData(quotes: Quote[], dto: ExportQuoteDto) {
    const data: Array<ReturnType<ExportedQuote['create']>> = [];
    let retailCenter: RetailCenter;
    let booking: Booking;
    let assetId: string;
    let postMonth: string;
    let notes: string;
    let customerCode: string;
    let ht: number;
    quotes.map((quote, index) => {
      let totalTva = 0;
      quote.edits.map((quoteEdit) => {
        totalTva = totalTva + quoteEdit.unitPrice * 0.2;
        ht = quoteEdit.unitPrice;
        quoteEdit.booking.units.map((unit) => {
          booking = quoteEdit.booking;
          retailCenter = unit.floor.retailCenter;
          assetId = retailCenter.alias;
          customerCode = booking.company.customerCode;
          notes = `${booking.type} - ${booking.brand.name} - ${quote.id}`;
          postMonth = quote.createdAt
            .toLocaleString('default', { month: '2-digit', year: 'numeric' })
            .replace(/\//, '/');
        });
      });
      data.push(
        ...Array.from({ length: 1 }, (i) =>
          new ExportedQuote(
            index + 1,
            customerCode ?? null,
            moment(quote.createdAt).format('DD/MM/YYYY'),
            postMonth,
            quote.id,
            notes,
            assetId,
            ht,
            dto.account ?? 44910000,
            dto.arAccount ?? 34210000,
            booking.type == 'PROPOSAL' ? 'advert' : 'eadvert',
            booking.type == 'PROPOSAL' ? 11 : null,
            moment(toUtc(booking.dateFrom)).format('DD/MM/YYYY'),
            moment(toUtc(booking.dateTo)).format('DD/MM/YYYY'),
            `${new Date().getFullYear()}000${Math.floor(
              100 + Math.random() * 900,
            )}`,
            dto.paymentMethod ?? 'CHEQUE',
            totalTva,
            1,
            moment().format('DD/MM/YYYY'),
          ).create(),
        ),
      );
    });
    return data;
  }

  private async _downloadCsv(
    res: Response,
    filename: string,
    quotes: Quote[],
    csvBuffer: Buffer,
  ) {
    // Create a new JSZip instance
    const zip = new JSZip();

    // Append the CSV file to the zip
    zip.file(`${filename}.csv`, csvBuffer, { binary: true });

    // Extract the documents for each quote
    const quoteDocsMap = await this._extractDocument(quotes);

    // Iterate over each quote
    quotes.forEach((quote) => {
      const {
        paths: quoteDocs,
        buffers: quoteDocBuffers,
        names,
      } = quoteDocsMap.get(quote.id.toString()) || { paths: [], buffers: [] };
      // If there are no documents for this quote, skip creating the folder
      if (quoteDocs.length === 0) {
        return;
      }
      const quoteFolder = zip.folder(quote.id.toString()); // Create a folder for each quote
      // Iterate over quoteDocs and quoteDocBuffers
      quoteDocs.forEach((quoteDoc, index) => {
        const extension = this._extractDocumentExtension(quoteDoc);
        const defaultFileName = path.parse(quoteDoc).name;
        const fileName = names[index] ?? defaultFileName;
        const quoteDocBuffer = quoteDocBuffers[index]; // Ensure the buffer matches the document

        // Add documents to the quote's folder
        quoteFolder.file(`${fileName}${extension}`, quoteDocBuffer, {
          binary: true,
        });
      });
    });

    // Generate the zip file as a buffer
    const zipBuffer = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
    });

    // Set the response headers for the zip file
    res.attachment(`${filename}.zip`);
    res.contentType('application/zip');

    // Send the zip file as a response
    res.send(zipBuffer);
  }

  private _addFileToZip(
    zip: JSZip,
    fileName: string,
    fileBuffer: Buffer,
    binary = true,
  ) {
    if (fileBuffer) {
      zip.file(fileName, fileBuffer, { binary });
    }
  }

  private async _extractDocument(quotes: Quote[]) {
    const quoteDocsMap = new Map<
      string,
      { paths: string[]; buffers: Buffer[]; names: string[] }
    >();

    for (const quote of quotes) {
      const quoteDocs: string[] = [];
      const quoteDocBuffers: Buffer[] = [];
      const quoteDocFileNames: string[] = [];
      for (const edit of quote.edits) {
        for (const doc of edit.booking.documents) {
          const docPath = this.documentService.resolveRootPath(doc.filePath);
          if (fs.existsSync(docPath)) {
            quoteDocFileNames.push(...this._getFileNamesByType(doc.type));
            quoteDocs.push(docPath);
            quoteDocBuffers.push(await fs.promises.readFile(docPath));
          }
        }
      }

      quoteDocsMap.set(quote.id.toString(), {
        paths: quoteDocs,
        buffers: quoteDocBuffers,
        names: quoteDocFileNames,
      });
    }

    return quoteDocsMap;
  }

  private _extractDocumentExtension(docPath: string): string {
    return path.extname(this.documentService.resolveRootPath(docPath));
  }

  private _getFileNamesByType(type: string) {
    const exportedAt = new Date().toISOString().replace(/:/g, '_');
    const quoteDocNames: string[] = [];
    switch (type) {
      case 'SIGNED_QUOTE':
        quoteDocNames.push(`devis-signé-${exportedAt}`);
        break;
      case 'PAYMENT_RECEIPT':
        quoteDocNames.push(`fiche-de-paiement-${exportedAt}`);
        break;
      case 'SIGNED_CGV':
        quoteDocNames.push(`condition-general-${exportedAt}`);
        break;
      case 'PURCHASE_ORDER':
        quoteDocNames.push(`bon-de-commande-${exportedAt}`);
        break;
      case 'INVOICE':
        quoteDocNames.push(`facture-${exportedAt}`);
        break;
      case 'CONTRACT':
        quoteDocNames.push(`contrat-${exportedAt}`);
        break;
      case 'SIGNED_CONTRACT':
        quoteDocNames.push(`contrat-signé-${exportedAt}`);
        break;
      case 'PAYMENT_CONTRACT':
        quoteDocNames.push(`paiement-contrat-${exportedAt}`);
        break;
      case 'SIGNED_CONVENTION':
        quoteDocNames.push(`convention-signée-${exportedAt}`);
        break;
      case 'PAYMENT_CONVENTION':
        quoteDocNames.push(`paiement-convention-${exportedAt}`);
        break;
      case 'SIGNED_HOT':
        quoteDocNames.push(`hot-signé-${exportedAt}`);
        break;
      case 'SIGNED_INSTALLATION':
        quoteDocNames.push(`installation-signée-${exportedAt}`);
        break;
      case 'PAYMENT_QUOTE':
        quoteDocNames.push(`paiement-devis-${exportedAt}`);
        break;
      case 'QUOTE_PAYMENT':
        quoteDocNames.push(`paiement-devis-${exportedAt}`);
        break;
      case 'LEGAL':
        quoteDocNames.push(`juridique-${exportedAt}`);
        break;
      case 'TECHNICAL':
        quoteDocNames.push(`technique-${exportedAt}`);
        break;
      case 'COMMERCIAL_DOCS':
        quoteDocNames.push(`documents-commerciaux-${exportedAt}`);
        break;
      case 'INSURANCE':
        quoteDocNames.push(`assurance-${exportedAt}`);
        break;
      case 'ORDER_FROM_LEAD':
        quoteDocNames.push(`commande-lead-${exportedAt}`);
        break;
      case 'ORDER_TO_CLIENT':
        quoteDocNames.push(`commande-client-${exportedAt}`);
        break;
      default:
        quoteDocNames.push(
          `${type.toLowerCase().replace(/_/g, '-')}-${exportedAt}`,
        );
    }
    return quoteDocNames;
  }

  private _removeDoubleQuote(csv: string): string {
    return csv
      .split('\n')
      .map((row) => {
        const columns = row.split(',');
        if (columns.length > 7) {
          columns[2] = columns[2].replace(/^"(.*)"$/, '$1');
          columns[7] = columns[7].replace(/^"(.*)"$/, '$1');
        }
        return columns.join(',');
      })
      .join('\n');
  }
}
