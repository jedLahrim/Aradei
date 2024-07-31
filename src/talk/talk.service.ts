import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTalkDto } from './dto/create-talk.dto';
import { GetTalksDto } from './dto/get-talks.dto';
import { MailerService } from '../mailer/mailer.service';
import { SortType } from '../common/enums/sort-type.enum';
import { Talk } from './entities/talk.entity';
import { AppError } from '../common/error/app-error';
import {
  ERR_NOT_CREATED_TALK,
  ERR_NOT_FOUND_DOCUMENT_VALIDATION,
} from '../common/error/error-code';
import { rethrow } from '@nestjs/core/helpers/rethrow';
import { UserPayload } from '../auth/interface/user-payload';

@Injectable()
export class TalkService {
  constructor(private prisma: PrismaService, private mailer: MailerService) {}

  async getTalks(data: GetTalksDto) {
    const talks = await this.prisma.talk.findMany({
      where: {
        documentId: data.documentId,
        bookingId: data.bookingId,
        document: {
          type: data.documentType,
        },
      },
      orderBy: {
        createdAt: SortType.desc,
      },
      include: {
        from: {
          include: {
            role: true,
          },
        },
        to: {
          include: {
            role: true,
          },
        },
        document: true,
      },
    });
    return talks;
  }

  async createTalk(data: CreateTalkDto, user: UserPayload): Promise<Talk> {
    try {
      const talkData: any = {
        content: data.content,
        from: {
          connect: {
            id: user.id,
          },
        },
        booking: {
          connect: {
            id: data.bookingId,
          },
        },
      };

      if (data.recipientId) {
        talkData.to = {
          connect: {
            id: data.recipientId,
          },
        };
      }

      if (data.documentId) {
        talkData.document = {
          connect: {
            id: data.documentId,
          },
        };
      }

      const talk = await this.prisma.talk.create({
        data: talkData,
      });

      const documentId = data.documentId;

      const documentValidation = await this.prisma.validation.findUnique({
        where: {
          documentId: documentId,
        },
        include: {
          kind: {
            include: {
              rolesNeeded: {
                select: {
                  id: true,
                },
              },
            },
          },
          document: {
            include: {
              creator: true,
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
                },
              },
            },
          },
        },
      });
      if (!documentValidation) {
        rethrow(
          new NotFoundException(
            new AppError(ERR_NOT_FOUND_DOCUMENT_VALIDATION),
          ),
        );
      }

      const result = {
        kind: documentValidation.kind.id,
        bookingId: data.bookingId,
        document: documentValidation.document,
        documentLink: data.documentLink,
        talk: talk,
      };
      await this.mailer.sendCommentNotification(result, user);

      return talk;
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_NOT_CREATED_TALK, e),
      );
    }
  }

  remove(id: string, user) {
    return `This action removes a #${id} talk`;
  }
}
