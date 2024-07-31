import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { Document } from './entities/document.entity';
import { quoteMakeHtml } from './templates/quoteMakeHtml';
import { hotMakeHtml } from './templates/offerMakeHtml';
import { NotificationService } from '../notification/notification.service';
import { contractMakeSpecialtyHtml } from './templates/contractMakeHtml';
import { v4 as uuidv4 } from 'uuid';
import { Booking } from 'src/booking/entities/booking.entity';
import { RetailCenter } from 'src/retailCenter/entities/retailcenter.entity';
import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { CreateComDoc } from './dto/createComDoc.dto';
import { CommercialDocument } from './entities/commercialDoc.entity';
import { UserPayload } from 'src/auth/interface/user-payload';
import { Floor } from 'src/floor/entities/floor.entity';
import { ProposalGenerator } from './helpers/proposalGenerator';
import PDFMerger from 'pdf-merger-js';
import { DocManager } from 'src/utils/DocManager';
import { join } from 'path';
import { PVGenerator } from './helpers/pvGenerator';
import { invoiceMakeHtml } from './templates/invoiceMakeHtml';
import { existsSync, unlinkSync } from 'fs';
import { unlink, writeFile } from 'fs/promises';
import { avatarText } from '../utils/helpers';

@Injectable()
export class DocumentService {
  constructor(
    private prisma: PrismaService,
    private mailer: MailerService,
    private notificationService: NotificationService,
  ) {}

  async getDocuments(data) {
    const { type } = data;
    const whereFilters = {
      retailCenter: data.retailCenter !== null ? data.retailCenter : undefined,
      type: undefined,
      company: undefined,
    };

    if (type.length > 0) {
      whereFilters.type = {
        in: [...data.type],
      };
    }
    const documents = await this.prisma.document.findMany({
      take: data.take,
      skip: data.skip,
      where: whereFilters,
      include: {
        unit: true,
        retailCenter: true,
        pages: true,
        quote: true,
        booking: {
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
            brand: true,
          },
        },
        company: true,
        brand: true,
        floor: true,
        creator: true,
        validators: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return documents;
  }

  async getCommercialDocs() {
    const commercialDocs: CommercialDocument[] =
      await this.prisma.commercialDoc.findMany({
        include: {
          RetailCenter: true,
        },
      });
    return commercialDocs;
  }

  async createInvoicePdf(invoiceId, user, send = false) {
    const invoiceDetails = await this.prisma.invoice.findUnique({
      where: {
        id: invoiceId,
      },
      include: {
        edits: {
          include: {
            invoice: true,
            booking: {
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
                creator: true,
                validators: true,
              },
            },
          },
        },
        creator: true,
      },
    });
    const fileName = invoiceDetails.id;
    const edits = invoiceDetails.edits;

    const templateData = invoiceMakeHtml(
      edits,
      invoiceDetails.edits[0].booking,
    );
    const invoiceFilePath = this.resolveRootPath(
      `/uploads/docTemplates/facture-${fileName}.pdf`,
    );

    await this.htmlToPdf(templateData, invoiceFilePath, 'portrait');

    const docData = {
      name: 'Facture',
      label: 'INVOICE',
      type: 'INVOICE',
      filePath: `/uploads/docTemplates/facture-${fileName}.pdf`,
      bookingId: invoiceDetails.edits[0].booking.id,
      attachTo: 'booking',
    };

    const createdDocument = await this.createDocument(docData, user);

    if (send) {
      await this.mailer.sendMarjaneInvoice(
        user,
        `/uploads/docTemplates/facture-${fileName}.pdf`,
        invoiceDetails.edits[0].booking,
      );
    }

    return createdDocument;
  }

  async createQuotePdf(quoteId, user, send = false) {
    const quoteDetails = await this.prisma.quote.findUnique({
      where: {
        id: quoteId,
      },
      include: {
        edits: {
          include: {
            quote: true,
            booking: {
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
                creator: true,
                validators: true,
              },
            },
          },
        },
        creator: true,
      },
    });

    const fileName = quoteDetails.id;
    const edits = quoteDetails.edits;

    const templateData = quoteMakeHtml(edits, quoteDetails.edits[0].booking);
    const quoteFilePath = this.resolveRootPath(
      `/uploads/docTemplates/devis-${fileName}.pdf`,
    );

    await this.htmlToPdf(templateData, quoteFilePath, 'portrait');

    const docData = {
      name: 'Devis',
      label: 'QUOTE',
      type: 'QUOTE',
      filePath: `/uploads/docTemplates/devis-${fileName}.pdf`,
      bookingId: quoteDetails.edits[0].booking.id,
      attachTo: 'booking',
    };

    const createdDocument = await this.createDocument(docData, user);

    if (send) {
      await this.mailer.sendQuote(
        user,
        `/uploads/docTemplates/devis-${fileName}.pdf`,
        quoteDetails.edits[0].booking,
      );
    }

    return createdDocument;
  }

  async createHotPdf(
    booking: Booking,
    dataObjString: string,
    user: UserPayload,
  ) {
    const dataObj = JSON.parse(dataObjString);

    const hotHtml = hotMakeHtml(booking, dataObj);
    const fileName = uuidv4();

    const HOTFilePath = this.resolveRootPath(
      `/uploads/docTemplates/HOT-${fileName}.pdf`,
    );

    await this.htmlToPdf(hotHtml, HOTFilePath, 'portrait', true);

    const docData = {
      name: 'Hot',
      label: 'HOT',
      type: 'HOT',
      dataObj: dataObjString,
      filePath: `/uploads/docTemplates/HOT-${fileName}.pdf`,
      bookingId: booking.id,
      attachTo: 'booking',
    };

    const createdDocument = await this.createDocument(docData, user);

    return createdDocument;
  }

  async createPvLivraisonPdf(bookingId: string, user) {
    const bookingDetails = await this.prisma.booking.findUnique({
      where: {
        id: bookingId,
      },
      include: {
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
    });

    const fileName = uuidv4();
    const PVFilePath = this.resolveRootPath(
      `/uploads/docTemplates/pv-livraison-${fileName}.pdf`,
    );
    await PVGenerator.pvLivraison(bookingDetails, PVFilePath);

    // todo: do this for all docs
    const createdDocument = await this.prisma.document.create({
      data: {
        name: 'Pv de livraison',
        label: 'PV_LIVRAISON',
        type: 'PV_LIVRAISON',
        filePath: `/uploads/docTemplates/pv-livraison-${fileName}.pdf`,
        creator: {
          connect: { id: user.id },
        },
        booking: {
          connect: {
            id: bookingId,
          },
        },
      },
    });

    // await this.mailer.sendPvLivraison(
    //   user,
    //   `/uploads/docTemplates/pv-livraison-${fileName}.pdf`,
    //   bookingDetails,
    // );

    return createdDocument;
  }

  async createContractPdf(quoteId, user, send = false) {
    const quoteDetails = await this.prisma.quote.findUnique({
      where: {
        id: quoteId,
      },
      include: {
        edits: {
          include: {
            quote: true,
            booking: {
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
                creator: true,
                validators: true,
              },
            },
          },
        },
      },
    });

    const fileName = quoteDetails.id;

    const templateData = contractMakeSpecialtyHtml(
      quoteDetails.edits[0].booking,
    );

    const contractFilePath = this.resolveRootPath(
      `/uploads/docTemplates/contrat-${fileName}.pdf`,
    );

    await this.htmlToPdf(templateData, contractFilePath, 'portrait');

    const docData = {
      name: 'Contrat',
      label: 'CONTRACT',
      type: 'CONTRACT',
      filePath: `/uploads/docTemplates/contrat-${fileName}.pdf`,
      bookingId: quoteDetails.edits[0].booking.id,
      attachTo: 'booking',
    };

    const createdDocument = await this.createDocument(docData, user);

    if (send) {
      await this.mailer.sendQuote(
        user,
        `/uploads/docTemplates/contrat-${fileName}.pdf`,
        quoteDetails.edits[0].booking,
      );
    }

    return createdDocument;
  }

  async createDocPdf(data: CreateDocumentDto) {
    // todo: do this for all docs
    let fileName;
    switch (data.type) {
      case 'PV_LIVRAISON':
        fileName = `pv-livraison-${uuidv4()}`;
        break;
      case 'CONVENTION':
        fileName = `convention-${uuidv4()}`;
        break;
      case 'HOT':
        fileName = `hot-${uuidv4()}`;
        break;
      default:
        fileName = `${uuidv4()}`;
        break;
    }

    let html = '';
    const dataObj = JSON.parse(data.dataObj);

    if (data.type === 'HOT') {
      const booking = await this.prisma.booking.findUnique({
        where: {
          id: data.bookingId,
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
        },
      });
      html = hotMakeHtml(booking, dataObj);
    } else if (data.type === 'PV_LIVRAISON') {
      // todo: pages
      const pages = dataObj.join(' ') || '';
      html = '<div>' + pages + '</div>';
    } else if (data.type === 'CONVENTION') {
      // todo: pages
      const pages = dataObj.pages.join(' ') || '';
      html = '<div>' + pages + '</div>';
    }

    const filePath = this.resolveRootPath(
      `/uploads/docTemplates/${fileName}.pdf`,
    );

    await this.htmlToPdf(html, filePath, 'portrait');

    return `/uploads/docTemplates/${fileName}.pdf`;
  }

  async createConventionPdf(data: CreateConventionDto, user, send = false) {
    const fileName = data.bookingId;

    const conventionFilePath = this.resolveRootPath(
      `/uploads/docTemplates/convention-${fileName}.pdf`,
    );

    await this.htmlToPdf(data.html, conventionFilePath, 'portrait');

    const docData = {
      name: 'Convention',
      label: 'CONVENTION',
      type: 'CONVENTION',
      filePath: `/uploads/docTemplates/convention-${fileName}.pdf`,
      bookingId: data.bookingId,
      attachTo: 'booking',
    };

    const createdDocument = await this.createDocument(docData, user);

    if (send) {
      await this.mailer.sendQuote(
        user,
        `/uploads/docTemplates/convention-${fileName}.pdf`,
        data.bookingId,
      );
    }

    return createdDocument;
  }

  async createProposal(booking: Booking, user: UserPayload) {
    // Cover
    const merger = new PDFMerger();
    const fileName = uuidv4();

    const coverFilePath = this.resolveRootPath(
      `/uploads/docTemplates/cover-${fileName}.pdf`,
    );

    await ProposalGenerator.proposalCover(coverFilePath);

    await merger.add(coverFilePath);

    let floorPresentationPath: undefined | string = undefined;
    let unitPresentationPath: undefined | string = undefined;
    let assetCoverPath: undefined | string = undefined;
    let assetDetailsPath: undefined | string = undefined;
    let assetInfoPath: undefined | string = undefined;
    let unitDetailsPath: undefined | string = undefined;
    let monoPlanPath: undefined | string = undefined;

    // Retail Centers
    const floors: Floor[] = [];
    for (const u of booking.units) {
      if (floors.find((f) => f.id === u.floorId) === undefined) {
        floors.push(u.floor);
      }
    }
    const retailCenters: RetailCenter[] = [];
    for (const fl of floors) {
      if (
        retailCenters.find((rc) => rc.id === fl.retailCenterId) === undefined
      ) {
        retailCenters.push(fl.retailCenter);
      }
    }
    for (const rc of retailCenters) {
      assetCoverPath = this.resolveRootPath(
        `/uploads/docTemplates/asset-${fileName}-${rc.id}.pdf`,
      );
      await ProposalGenerator.assetCover(rc, assetCoverPath);
      await merger.add(assetCoverPath);

      assetDetailsPath = this.resolveRootPath(
        `/uploads/docTemplates/asset-details-${fileName}-${rc.id}.pdf`,
      );

      const brands = await this.prisma.brand.findMany({
        where: {
          bookings: {
            some: {
              units: {
                some: {
                  floor: {
                    retailCenterId: rc.id,
                  },
                },
              },
            },
          },
        },
      });

      await ProposalGenerator.assetDetails(rc, brands, assetDetailsPath);
      await merger.add(assetDetailsPath);
      assetInfoPath = this.resolveRootPath(
        `/uploads/docTemplates/asset-info-${fileName}-${rc.id}.pdf`,
      );
      await ProposalGenerator.assetInfo(rc, assetInfoPath);
      await merger.add(assetInfoPath);
      // - Floors
      const rcFloors = floors.filter((fl) => fl.retailCenterId === rc.id);
      for (const floor of rcFloors) {
        // - - Floor Presentation
        const floorComDoc = floor.commercialDocs[0];

        if (floorComDoc) {
          await merger.add(this.resolveRootPath(floorComDoc.filePath));
        }
        const units = booking.units.filter((unit) => unit.floorId === floor.id);
        floorPresentationPath = this.resolveRootPath(
          `/uploads/docTemplates/floor-${fileName}-${floor.id}.pdf`,
        );
        await ProposalGenerator.floorPresentation(
          floor,
          booking.units.filter((u) => u.floorId === floor.id),
          booking,
          rc.name,
          rc.city,
          floorPresentationPath,
        );
        await merger.add(floorPresentationPath);
        // - - Unit Presentation
        for (const unit of units) {
          unitDetailsPath = this.resolveRootPath(
            `/uploads/docTemplates/unit-${fileName}-${unit.unitId}.pdf`,
          );

          const userPayload = await this.prisma.userProfile.findUnique({
            where: {
              id: user.id,
            },
            select: {
              picture: true,
              name: true,
              firstName: true,
              mobilePhone: true,
              email: true,
            },
          });
          await ProposalGenerator.unitDetails(
            floor,
            unit,
            booking,
            rc,
            userPayload,
            unitDetailsPath,
          );
          await merger.add(unitDetailsPath);
          if (unit?.documents?.find((doc) => doc.type === 'MONOPLAN')) {
            monoPlanPath = this.resolveRootPath(
              `/uploads/docTemplates/mono-plan-${fileName}-${unit.unitId}.pdf`,
            );
            await ProposalGenerator.monoPlan(floor, unit, rc, monoPlanPath);
            await merger.add(monoPlanPath);
          }
        }
      }
    }

    const proposalFilePath = this.resolveRootPath(
      `/uploads/docTemplates/proposition-${fileName}.pdf`,
    );

    await merger.save(proposalFilePath);

    const docData = {
      name: 'Proposition',
      label: 'PROPOSAL',
      type: 'PROPOSAL',
      filePath: `/uploads/docTemplates/proposition-${fileName}.pdf`,
      bookingId: booking.id,
      attachTo: 'booking',
    };

    const createdDocument = await this.createDocument(docData, user);

    unlink(coverFilePath);
    if (floorPresentationPath) unlink(floorPresentationPath);
    if (unitPresentationPath) unlink(unitPresentationPath);
    if (monoPlanPath) unlink(monoPlanPath);
    if (assetCoverPath) unlink(assetCoverPath);
    if (assetDetailsPath) unlink(assetDetailsPath);
    if (assetInfoPath) unlink(assetInfoPath);

    return createdDocument;
  }

  async htmlToPdf(
    htmlSourceUrl: string,
    outputPath: string,
    orientation: string,
    isHot = false,
  ) {
    const docManager = new DocManager(undefined, {
      landscape: orientation === 'landscape',
      pageMargin: {
        top: isHot ? '5px' : 0,
        bottom: isHot ? '5px' : 0,
        right: isHot ? '5px' : 0,
        left: isHot ? '5px' : 0,
      },
      pageFormat: 'A4',
      scale: 1,
    });

    await docManager.printHTMLContent(htmlSourceUrl, outputPath);

    return 200;
  }

  async planSvg() {
    return true;
  }

  async relanceDoc(roleId, bookingId, user) {
    const who = await this.prisma.userProfile.findFirst({
      where: {
        roleId,
        status: 1,
      },
    });

    const to = who.email;
    await this.mailer.sendRelance(to, bookingId, user);
    return true;
  }

  async updateDocument(data: UpdateDocumentDto): Promise<Document | { err }> {
    const { id, filePath, dataObj, sent } = data;

    const updateData: any = {};
    if (filePath !== undefined) {
      updateData.filePath = filePath;
    }
    if (dataObj !== undefined) {
      updateData.dataObj = dataObj;
    }
    if (sent !== undefined) {
      updateData.sent = sent;
    }

    if (Object.keys(updateData).length === 0) {
      return { err: 'No update data provided.' };
    }

    updateData.updatedAt = new Date();

    const updatedDoc = await this.prisma.document.update({
      where: {
        id,
      },
      data: updateData,
    });

    return updatedDoc;
  }

  async createDocument(data: CreateDocumentDto, user: UserPayload) {
    const { attachTo, type, companyId, unitId, bookingId, quoteId, ...dataF } =
      data;
    let toConnect: Record<string, any> = {};

    const connectObj = (id: string, type: string) =>
      id ? { [type]: { connect: { id } } } : null;

    const companyConnect = connectObj(companyId, 'company');
    const bookingConnect = connectObj(bookingId, 'booking');
    const quoteConnect = connectObj(quoteId, 'quote');
    const unitConnect = connectObj(unitId, 'unit');

    let bookingDetails: Booking;

    switch (attachTo) {
      case 'company':
        toConnect = companyConnect;
        break;
      case 'booking':
        toConnect = bookingConnect;
        if (bookingId) {
          bookingDetails = await this.prisma.booking.findUnique({
            where: { id: bookingId },
          });
        }
        break;
      case 'quote':
        toConnect = quoteConnect;
        break;
      case 'unit':
        toConnect = unitConnect;
        break;
    }

    const dataObj = JSON.parse(data.dataObj ?? '{}');

    if (['PV_LIVRAISON', 'CONVENTION', 'HOT'].includes(type)) {
      dataF.filePath = await this.createDocPdf(data);
    }

    if (type === 'CONVENTION') {
      dataF.dataObj = JSON.stringify({ amount: dataObj.amount });
    }

    const docData = {
      type,
      creator: { connect: { id: user.id } },
      ...dataF,
      ...toConnect,
    };

    const createdDocument = await this.prisma.document.create({
      data: docData,
    });

    let pages: string[] = [];

    switch (type) {
      case 'PV_LIVRAISON':
        pages = dataObj;
        break;
      case 'CONVENTION':
        pages = dataObj.pages;
        break;
    }

    if (pages.length > 0) {
      await this.prisma.page.createMany({
        data: pages.map((page) => ({
          content: page,
          documentId: createdDocument.id,
        })),
      });
    }
    if (type === 'CONTRACT') {
      const messagetype =
        bookingDetails?.type === 'HOT'
          ? 'new_doc_Contract_lt'
          : 'new_doc_Contract_sp';
      await this.mailer.sendValidation(
        user,
        messagetype,
        bookingDetails.id,
        '',
        [createdDocument.filePath],
      );
    }

    return createdDocument;
  }

  async getDocument(id: string): Promise<Document> {
    const document = await this.prisma.document.findFirst({
      where: {
        id,
      },
      include: {
        unit: true,
        retailCenter: true,
        booking: {
          include: {
            units: {
              include: {
                UnitsForecasts: true,
                floor: {
                  include: {
                    retailCenter: true,
                  },
                },
              },
            },
            brand: true,
            company: true,
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
            proposalEdits: {
              include: {
                booking: true,
                creator: true,
              },
            },
            documents: true,
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
        company: true,
        brand: true,
        floor: true,
        creator: true,
        validators: true,
        pages: true,
        quote: true,
      },
    });

    return document;
  }

  async validateDocument(
    id: string,
    documentLink: string,
    user: UserPayload,
  ): Promise<Document | { err }> {
    const validatedDocument = await this.prisma.document.update({
      where: {
        id,
      },
      data: {
        validators: {
          connect: {
            id: user.id,
          },
        },
      },
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
        booking: {
          include: {
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
        },
        validators: true,
        creator: true,
      },
    });

    const validator = await this.prisma.userProfile.findFirst({
      where: {
        id: user.id,
      },
    });

    const emailData = {
      kind: validatedDocument.validation.kind.id,
      document: validatedDocument,
      bookingId: validatedDocument.booking.id,
      documentLink,
    };
    await this.mailer.sendValidationNotification(emailData, user);

    const roleIds =
      validatedDocument.validation?.kind?.rolesNeeded?.map((role) => role.id) ||
      [];
    const validatorsIds =
      validatedDocument.validators?.map((validator) => validator.roleId) || [];

    const isDocValidatedByAll =
      roleIds.length > 0 &&
      validatorsIds.length > 0 &&
      roleIds.length === validatorsIds.length &&
      roleIds.every((item) => validatorsIds.includes(item));

    if (isDocValidatedByAll) {
      await this.prisma.validation.update({
        where: {
          id: validatedDocument.validation.id,
        },
        data: {
          isComplete: true,
          updatedAt: new Date(),
        },
      });
    }

    return validatedDocument;
  }

  async getTechDocuments() {
    const documents = await this.prisma.document.findMany({
      where: {
        type: {
          in: ['PV_LIVRAISON', 'FICHE_COM_RTM'],
        },
        validation: {
          isNot: null,
        },
      },
      include: {
        unit: true,
        retailCenter: true,
        validation: true,
        booking: {
          include: {
            brand: true,
            units: {
              include: {
                floor: {
                  include: {
                    retailCenter: true,
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
                        companyGroup: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        company: true,
        brand: true,
        floor: true,
        creator: true,
        validators: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return documents;
  }

  async deleteDocument(id: string, user) {
    try {
      const doc = await this.prisma.document.delete({
        where: {
          id,
        },
      });

      this.prisma.history.create({
        data: {
          action: 'DELETE DOCUMENT',
          creator: {
            connect: {
              id: user.id,
            },
          },
          booking: {
            connect: {
              id: doc.bookingId,
            },
          },
        },
      });

      // todo:
      const filePath = this.resolveRootPath(doc.filePath);
      if (existsSync(filePath)) {
        unlinkSync(filePath);
      }
      return true;
    } catch (error) {
      console.error('Error deleting document:', error);
      return false;
    }
  }

  async createCommercialDoc(data: CreateComDoc) {
    let payload: any = {};

    switch (data.parent) {
      case 'floor':
        payload = {
          filePath: data.filePath,
          name: data.name,
          type: data.type,
          Floor: {
            connect: {
              id: data.parentId,
            },
          },
        };
        break;
      case 'retailCenter':
        payload = {
          filePath: data.filePath,
          name: data.name,
          type: data.type,
          RetailCenter: {
            connect: {
              id: data.parentId,
            },
          },
        };
        break;
      case 'portfolio':
        payload = {
          filePath: data.filePath,
          name: data.name,
          type: data.type,
        };
        break;
    }

    const commercialDoc = await this.prisma.commercialDoc.create({
      data: payload,
    });

    return commercialDoc;
  }

  async removeCommercialDoc(docId: string) {
    const commercialDoc = await this.prisma.commercialDoc.findFirst({
      where: {
        id: docId,
      },
    });

    if (!commercialDoc) return false;

    const commercialDocFilePath = this.resolveRootPath(commercialDoc.filePath);

    if (existsSync(commercialDocFilePath)) {
      unlinkSync(commercialDocFilePath);
    }

    await this.prisma.commercialDoc.delete({
      where: {
        id: docId,
      },
    });

    return true;
  }

  resolveRootPath(path: string) {
    if (path.startsWith('/')) {
      return join(__dirname, `../../..${path}`);
    } else {
      return join(__dirname, `../../../${path}`);
    }
  }
}
