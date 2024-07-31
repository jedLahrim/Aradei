import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { validationKind } from '../enum/validationKind';
import { GetValidationsDto } from './dto/get-validations.dto';
import { AppError } from '../common/error/app-error';
import {
  ERR_NOT_COMPLETED_VALIDATION,
  ERR_NOT_CREATED_VALIDATION,
  ERR_NOT_FOUND_VALIDATION,
} from '../common/error/error-code';
import { UserPayload } from 'src/auth/interface/user-payload';
import { rethrow } from '@nestjs/core/helpers/rethrow';
import { ValidationList } from './dto/validation-list';
import { SortType } from '../common/enums/sort-type.enum';
import { UpdateValidationKindDto } from './dto/update-validation-kind.dto';

@Injectable()
export class ValidationService {
  constructor(private prisma: PrismaService, private mailer: MailerService) {}

  async getValidations(
    data: GetValidationsDto,
    user: UserPayload,
  ): Promise<ValidationList> {
    const whereCondition: {
      kind?: {
        id?: { in: number[] };
        rolesNeeded: { some: { id: number } };
      };
    } = {};

    if (data.kind && data.kind.length > 0) {
      whereCondition.kind = {
        id: { in: data.kind },
        rolesNeeded:
          user.level !== 4 ? { some: { id: user.level } } : undefined,
      };
    } else {
      whereCondition.kind = {
        rolesNeeded:
          user.level !== 4 ? { some: { id: user.level } } : undefined,
      };
    }
    const totalValidation = await this.prisma.validation.count({
      where: whereCondition,
    });
    const validations = await this.prisma.validation.findMany({
      where: whereCondition,
      take: data.take,
      skip: data.skip,
      orderBy: {
        createdAt: SortType.desc,
      },
      include: {
        kind: true,
        quote: true,
        mediaProposal: {
          include: {
            medias: true,
            creator: true,
            unit: {
              include: {
                features: true,
              },
            },
          },
        },
        document: {
          include: {
            validators: {
              include: {
                role: true,
              },
            },
          },
        },
        creator: true,
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
            quoteEdits: {
              include: {
                quote: true,
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
            documents: {
              include: {
                validation: true,
              },
            },
          },
        },
      },
    });
    return new ValidationList(validations, totalValidation);
  }

  async get(user) {
    const validationKind = await this.prisma.validationKind.findMany({
      where: {
        rolesNeeded: {
          every: {
            id: user.level,
          },
        },
      },
    });

    const validationsList = await this.prisma.validation.findMany({
      where: {
        kind: {
          id: validationKind[0].id,
        },
      },
      include: {
        kind: true,
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
            quoteEdits: {
              include: {
                quote: true,
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
          },
        },
      },
    });

    return validationsList;
  }

  async create(user, data) {
    try {
      const {
        kindId,
        bookingId,
        documentId,
        mediaProposalId,
        documentLink,
        quoteId,
      } = data;
      const validationData: any = {
        kind: {
          connect: {
            id: kindId,
          },
        },
        booking: {
          connect: {
            id: bookingId,
          },
        },
        creator: {
          connect: {
            id: user.id,
          },
        },
      };

      if (documentId) {
        validationData.document = {
          connect: {
            id: documentId,
          },
        };
      }
      if (mediaProposalId) {
        validationData.mediaProposal = {
          connect: {
            id: mediaProposalId,
          },
        };
      }
      if (quoteId) {
        validationData.quote = {
          connect: {
            id: quoteId,
          },
        };
      }

      const validation = await this.prisma.validation.create({
        data: validationData,
      });

      const valKind = await this.prisma.validationKind.findUnique({
        where: { id: kindId },
        include: { rolesNeeded: true },
      });

      if (!valKind) {
        rethrow(new NotFoundException(new AppError(ERR_NOT_FOUND_VALIDATION)));
      }

      switch (kindId) {
        case validationKind.CONTRACT_VALIDATION:
          await this.mailer.sendValidation(
            user,
            'new_contrat_bail',
            bookingId,
            '',
            [],
          );
          break;
        case validationKind.INVOICE_VALIDATION:
          await this.mailer.sendValidation(
            user,
            'new_invoice',
            bookingId,
            documentLink,
            [],
          );
          break;
        case validationKind.FICHE_COM_RTM:
          await this.mailer.sendValidation(
            user,
            'new_fiche_rtm',
            bookingId,
            documentLink,
            [],
          );
          break;
        case validationKind.PV_LIVRAISON:
          const booking = await this.prisma.booking.findUnique({
            where: {
              id: bookingId,
            },
            include: {
              documents: true,
            },
          });
          const fileName = booking.documents.find(
            (document) => document.type === 'PV_LIVRAISON',
          ).filePath;
          await this.mailer.sendInstallation(user, fileName, bookingId);
          break;
        case validationKind.FICHE_COM:
          await this.mailer.sendValidation(
            user,
            'new_fiche_de_com',
            bookingId,
            documentLink,
            [],
          );
          break;
        case validationKind.FICHE_COM_LT:
          await this.mailer.sendValidation(
            user,
            'new_fiche_de_com_lt',
            bookingId,
            documentLink,
            [],
          );
          break;
        case validationKind.MEDIA:
          await this.mailer.sendValidation(
            user,
            'new_media_to_validate',
            bookingId,
            '',
            [],
          );
          break;
        case validationKind.QUOTE:
          await this.mailer.sendValidation(
            user,
            'new_quote_to_validate',
            bookingId,
            documentLink,
            [],
          );
          break;
        case validationKind.OIP:
          await this.mailer.sendValidation(
            user,
            'new_oip_to_validate',
            bookingId,
            documentLink,
            [],
          );
          break;
      }

      return validation;
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_NOT_CREATED_VALIDATION, e),
      );
    }
  }

  async complete(
    user: UserPayload,
    validationId: string,
    documentId: string,
    documentLink: string,
  ) {
    try {
      const updateData = {
        isComplete: true,
        updatedAt: new Date(),
        documentId: undefined,
      };

      if (documentId) {
        updateData.documentId = documentId;
      }

      const completed = await this.prisma.validation.update({
        where: {
          id: validationId,
        },
        data: updateData,
        include: {
          creator: true,
          booking: true,
          document: true,
        },
      });
      const emailData = {
        document: completed.document,
        bookingId: completed.booking.id,
      };
      if (completed.kindId === 9) {
        await this.mailer.validationNotification(
          emailData,
          user,
          'quote_validated',
          documentLink,
        );
      }
      if (completed.kindId === 8) {
        await this.mailer.validationNotification(
          emailData,
          user,
          'media_validated',
          documentLink,
        );
      }

      const existingBooking = await this.prisma.booking.findUnique({
        where: {
          id: completed.bookingId,
        },
        include: {
          units: true,
          quoteEdits: {
            include: {
              quote: true,
            },
          },
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

      if (existingBooking.type === 'MEDIA') {
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
        const hasValidatedQuote = existingBooking.quoteEdits.some(
          (quoteEdit) => quoteEdit.quote.isValidated === true,
        );

        if (allUnitsHaveValidatedProposal && hasValidatedQuote) {
          await this.prisma.booking.update({
            where: {
              id: completed.bookingId,
            },
            data: {
              status: 3,
            },
          });
        }
      }

      return completed;
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_NOT_COMPLETED_VALIDATION),
      );
    }
  }

  async getValidationKinds(user: UserPayload) {
    const validationKinds = await this.prisma.validationKind.findMany({
      include: {
        validations: true,
        rolesNeeded: {
          include: {
            users: true,
          },
        },
      },
    });

    return validationKinds;
  }

  async updateValidationKind(user: UserPayload, data: UpdateValidationKindDto) {
    const { id, rolesNeeded } = data;

    const validationKind = await this.prisma.validationKind.findUnique({
      where: {
        id,
      },
      include: {
        rolesNeeded: true,
      },
    });

    if (!validationKind) {
      throw new Error(`ValidationKind with id ${id} not found`);
    }

    await this.prisma.validationKind.update({
      where: {
        id,
      },
      data: {
        rolesNeeded: {
          disconnect: validationKind.rolesNeeded.map((role) => ({
            id: role.id,
          })),
        },
      },
    });

    const updatedValidationKind = await this.prisma.validationKind.update({
      where: {
        id,
      },
      data: {
        rolesNeeded: {
          connect: rolesNeeded.map((roleId) => ({ id: Number(roleId) })),
        },
      },
    });

    return updatedValidationKind;
  }
}
