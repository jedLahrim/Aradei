import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Notification } from './entities/notification.entity';
import { SortType } from '../common/enums/sort-type.enum';
import { AppError } from '../common/error/app-error';
import { ERR_NOT_CREATED_NOTIFICATION } from '../common/error/error-code';
import { UserPayload } from '../auth/interface/user-payload';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  async createNotification(data: CreateNotificationDto) {
    try {
      const createdNotification = await this.prisma.notification.create({
        data: {
          message: data.message,
          type: data.type,
          bookingId: data.bookingId,
          users: {
            connect: data.users.map((userId) => ({ id: userId })),
          },
        },
        include: {
          booking: true,
          users: true,
          readers: true,
        },
      });
      return createdNotification;
    } catch (e) {
      throw new NotFoundException(
        new AppError(ERR_NOT_CREATED_NOTIFICATION, e),
      );
    }
  }

  async getNotifications(user) {
    const notifications = await this.prisma.notification.findMany({
      where: {
        users: {
          some: {
            id: user.id,
          },
        },
        readers: {
          none: {
            id: user.id,
          },
        },
      },
      include: {
        booking: {
          include: {
            units: {
              include: {
                floor: {
                  include: {
                    retailCenter: {
                      include: {
                        UserProfile: true,
                      },
                    },
                  },
                },
              },
            },
            documents: true,
          },
        },
        users: true,
        readers: true,
      },
      orderBy: {
        date: SortType.desc,
      },
    });

    return notifications;
  }

  async getAllNotifications(user) {
    const notifications = await this.prisma.notification.findMany({
      where: {
        users: {
          some: {
            id: user.id,
          },
        },
      },
      include: {
        booking: {
          include: {
            units: {
              include: {
                floor: {
                  include: {
                    retailCenter: {
                      include: {
                        UserProfile: true,
                      },
                    },
                  },
                },
              },
            },
            documents: true,
          },
        },
        users: true,
        readers: true,
      },
      orderBy: {
        date: 'desc',
      },
    });

    return notifications;
  }

  async markAsRead(id: string, user: any) {
    const notification = await this.prisma.notification.update({
      where: {
        id,
      },
      data: {
        readers: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
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
            documents: true,
          },
        },
        users: true,

        readers: true,
      },
    });
    return notification;
  }
}
