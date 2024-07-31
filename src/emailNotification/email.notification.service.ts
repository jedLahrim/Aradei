import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MessageNotification } from './entities/message-notification.entity';
import { UpdateMessageNotificationDto } from './dto/update-message-notification.dto';
import { CreateMessageNotificationDto } from './dto/create-message-notification.dto';
import { EmailTemplate } from './entities/email-template.entity';
import { UpdateEmailTemplateDto } from './dto/update-email-template.dto';
import { AppError } from '../common/error/app-error';
import {
  ERR_NOT_FOUND_EMAIL_TEMPLATE,
  ERR_NOT_FOUND_MESSAGE_NOTIFICATION,
} from '../common/error/error-code';
import { UserPayload } from '../auth/interface/user-payload';
import { SortType } from '../common/enums/sort-type.enum';

@Injectable()
export class EmailNotificationService {
  constructor(private prisma: PrismaService) {}

  async getMessageNotification(
    user: UserPayload,
    name: string,
  ): Promise<MessageNotification> {
    const messageNotification = await this.prisma.messageNotification.findFirst(
      {
        where: {
          name: name,
        },
        include: {
          emailTemplate: true,
        },
      },
    );
    if (!messageNotification)
      throw new NotFoundException(
        new AppError(ERR_NOT_FOUND_MESSAGE_NOTIFICATION),
      );
    return messageNotification;
  }

  async getMessageNotifications(
    user: UserPayload,
  ): Promise<MessageNotification[]> {
    try {
      return await this.prisma.messageNotification.findMany({
        include: {
          emailTemplate: true,
          tos: {
            include: {
              users: true,
            },
          },
        },
        orderBy: {
          createdAt: SortType.desc,
        },
      });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async updateMessageNotification(
    data: UpdateMessageNotificationDto,
    user: UserPayload,
  ): Promise<MessageNotification> {
    const { messageNotificationId, tos, ...dataCleaned } = data;
    try {
      await this.prisma.messageNotification.update({
        where: {
          id: messageNotificationId,
        },
        data: {
          tos: {
            set: [],
          },
        },
      });
      return await this.prisma.messageNotification.update({
        where: {
          id: messageNotificationId,
        },
        data: {
          tos: {
            connect: tos.map((value) => ({ id: value })),
          },
          ...dataCleaned,
        },
        include: {
          emailTemplate: true,
          tos: true,
        },
      });
    } catch (e) {
      throw new NotFoundException(
        new AppError(ERR_NOT_FOUND_MESSAGE_NOTIFICATION),
      );
    }
  }

  async updateEmailTemplate(
    data: UpdateEmailTemplateDto,
    user: UserPayload,
  ): Promise<EmailTemplate> {
    const { emailTemplateId, ...dataF } = data;
    try {
      return await this.prisma.emailTemplate.update({
        where: {
          id: emailTemplateId,
        },
        data: {
          ...dataF,
        },
        include: {
          messageNotifications: true,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_EMAIL_TEMPLATE));
    }
  }

  async createMessageNotification(
    data: CreateMessageNotificationDto,
    user: UserPayload,
  ): Promise<MessageNotification> {
    const { emailTemplateId, ...dataF } = data;
    try {
      return await this.prisma.messageNotification.create({
        data: {
          ...dataF,
          emailTemplate: {
            connect: {
              id: emailTemplateId,
            },
          },
        },
        include: {
          emailTemplate: true,
        },
      });
    } catch (e) {
      throw new NotFoundException(
        new AppError(ERR_NOT_FOUND_MESSAGE_NOTIFICATION),
      );
    }
  }

  async getEmailTemplates(user: UserPayload): Promise<EmailTemplate[]> {
    try {
      return await this.prisma.emailTemplate.findMany({
        include: {
          messageNotifications: {},
        },
        orderBy: {
          createdAt: SortType.desc,
        },
      });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
