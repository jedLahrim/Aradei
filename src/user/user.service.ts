import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserProfileDto } from './dto/create-userProfile.dto';
import { UserProfile } from './entities/userProfile.entity';
import { AuthPayload } from '../interfaces/authPayload';
import { jwtConstants } from '../auth/constants';
import { JwtService } from '@nestjs/jwt';
import { InjectMailgun } from '@mindik/mailgun-nestjs';
import * as niceware from 'niceware';
import * as bcrypt from 'bcrypt';
import { UpdateUserProfileDto } from './dto/update-userProfile.dto';
import * as handlebars from 'handlebars';
import { UserPayload } from '../auth/interface/user-payload';
import { GetTeamDto } from './dto/get-team.dto';
import { AppError } from '../common/error/app-error';
import { CreateUserRoleDto } from './dto/create-userRole.dto';

import {
  ERR_NOT_FOUND_CONTACT,
  ERR_NOT_FOUND_USER,
} from '../common/error/error-code';
import { ClientManager } from '../prisma/ClientManager';
import { UpdateUserRoleDto } from './dto/update-userRole.dto';
import { ResetDto } from './dto/reset.dto';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    @InjectMailgun() private readonly mg,
  ) {}

  async updateUser(data: UpdateUserProfileDto): Promise<UserProfile> {
    const { userId, roleId, retailCenters, ...dataF } = data;
    const retailCentersIds = (
      await this.prisma.retailCenter.findMany({
        where: { id: { in: retailCenters } },
      })
    ).map((value) => value.id);
    const user = await this.prisma.userProfile.findUnique({
      where: {
        id: userId,
      },
      include: {
        retailCenters: true,
      },
    });
    if (!user) throw new NotFoundException(new AppError(ERR_NOT_FOUND_USER));
    await this.prisma.userProfile.update({
      where: {
        id: userId,
      },
      data: {
        retailCenters: {
          disconnect: user.retailCenters.map((rc) => ({ id: rc.id })),
        },
      },
    });

    return await this.prisma.userProfile.update({
      where: {
        id: userId,
      },
      data: {
        ...dataF,
        role: {
          connect: {
            id: roleId,
          },
        },
        retailCenters: {
          connect: retailCentersIds.map((retailCenterId) => ({
            id: retailCenterId,
          })),
        },
      },
      include: {
        retailCenters: true,
        role: true,
      },
    });
  }

  async registerUser(
    data: CreateUserProfileDto,
    user: UserPayload,
  ): Promise<AuthPayload> {
    try {
      const {
        picture,
        fromContactId,
        email,
        firstName,
        name,
        phone,
        mobilePhone,
        jobTitle,
        roleId,
        retailCenters,
      } = data;

      const passphrase = niceware.generatePassphrase(8);
      const password = `${passphrase[0]}${passphrase[1]}`;

      const CreatedUser = await this.prisma.userProfile.create({
        data: {
          jobTitle,
          email: email,
          password: bcrypt.hashSync(password, 8),
          name,
          phone,
          mobilePhone,
          picture,
          firstName: firstName,
          role: {
            connect: {
              id: roleId,
            },
          },
          retailCenters: {
            connect: retailCenters.map((retailCenterId) => ({
              id: retailCenterId,
            })),
          },
        },
        include: {
          role: true,
        },
      });

      if (fromContactId) {
        await this.prisma.contact.update({
          where: {
            id: fromContactId,
          },
          data: {
            hasAccount: true,
          },
        });
      }

      CreatedUser.password = password;
      const tokenInfos = { email: CreatedUser.email, id: CreatedUser.id };

      const payload = {
        user: CreatedUser,
        token: this.jwtService.sign(tokenInfos, {
          secret: jwtConstants.secret,
        }),
      };

      await this.prisma.history.create({
        data: {
          action: 'CREATE_USER',
          creator: {
            connect: {
              id: user.id,
            },
          },
        },
      });
      const messageNotification =
        await this.prisma.messageNotification.findFirst({
          where: {
            name: 'new_user',
          },
        });

      const emailTemplate = await this.prisma.emailTemplate.findFirst({
        where: {
          id: 1,
        },
      });
      const template = handlebars.compile(messageNotification.message);
      const messageTemplate = template({
        firstName: CreatedUser?.firstName,
        login: CreatedUser?.email,
        password: CreatedUser?.password,
      });
      const emailFromName = ClientManager.getClient().emailFromName;
      const emailFrom = ClientManager.getClient().emailFrom;
      if (CreatedUser.roleId !== 99) {
        await this.mg.messages
          .create('squarefeet.cloud', {
            from: `${emailFromName} <${emailFrom}>`,
            to: [CreatedUser?.email],
            bcc: 'malaouifr@gmail.com',
            subject: messageNotification.subject,
            html: `<html><body><table style="width: 500px; margin: 0 auto;"><tr><td><img src="${emailTemplate.headerImage}" alt="Header Image" /></td></tr><tr><td>${messageTemplate}</td></tr><tr><td><p><strong>${emailTemplate.signature}</strong></p></td></tr><tr><td><img src="${emailTemplate.footerImage}" alt="Footer Image" /></td></tr><tr><td style="text-align: center;"><p><a  href="${emailTemplate.linkWebsite}" rel="noopener noreferrer" target="_blank">${emailTemplate.linkWebsite}</a></p></td></tr></table></body></html>`,
          })
          .then(() => {
            // console.log(msg)
          })
          .catch((err) => console.error(err));
      }

      return payload;
    } catch (error) {
      if (error.code === 'P2002' && error.meta?.target.includes('email')) {
        throw new HttpException(
          'Email is already registered. Please use a different email.',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          'User registration failed. Please try again later.',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async deleteUser(id: string) {
    try {
      await this.prisma.userProfile.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_USER));
    }
  }

  async suspendUser(id) {
    const foundUser = await this.prisma.userProfile.findUnique({
      where: {
        id,
      },
    });

    const usersWithSameRole = await this.prisma.userProfile.findMany({
      where: {
        roleId: foundUser.roleId,
        status: 1,
      },
    });

    if (usersWithSameRole.length === 1) {
      throw new Error(
        "Impossible de suspendre le seul utilisateur avec ce rôle. Créez d'abord un nouvel utilisateur avec le même rôle",
      );
    }

    await this.prisma.userProfile.update({
      where: {
        id,
      },
      data: {
        status: 0,
      },
    });

    return true;
  }

  async reactivateUser(id) {
    await this.prisma.userProfile.update({
      where: {
        id,
      },
      data: {
        status: 1,
      },
    });
    return true;
  }

  async getUser(id: string) {
    const user = await this.prisma.userProfile.findUnique({
      where: {
        id,
      },
      include: {
        role: true,
        histories: true,
        bookings: true,
        documents: true,
        retailCenters: true,
      },
    });
    if (!user) throw new NotFoundException(new AppError(ERR_NOT_FOUND_USER));
    return user;
  }

  async getLeadBookings(user: UserPayload) {
    const userBookings = await this.prisma.contact.findFirst({
      where: {
        email: user.email,
      },
      include: {
        bookings: {
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
          },
        },
      },
    });
    if (!userBookings)
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_CONTACT));
    return userBookings;
  }

  async getUsers(
    user: UserPayload,
    data: GetTeamDto,
  ): Promise<UserProfile[] | null> {
    let whereQuery;

    if (user.level !== 1) {
      whereQuery = {
        roleId: {
          not: 9,
        },
      };
    } else {
      whereQuery = {
        roleId: {
          not: 9,
        },
      };
    }

    if (data.roleId) {
      whereQuery.roleId = data.roleId;
    }

    const users = await this.prisma.userProfile.findMany({
      where: whereQuery,
      include: {
        role: true,
        histories: true,
        bookings: {
          include: {
            quoteEdits: {
              include: {
                booking: true,
                creator: true,
              },
            },
          },
        },
        retailCenters: true,
        documents: true,
      },
    });

    return users;
  }

  async getUserRoles(user: UserPayload) {
    const users = await this.prisma.userRole.findMany({
      include: {
        users: true,
        Permissions: true,
      },
    });
    return users;
  }

  async createUserRole(data: CreateUserRoleDto) {
    const { id, name, title } = data;

    const createdUserRole = await this.prisma.userRole.create({
      data: {
        id,
        name,
        title,
      },
    });

    return createdUserRole;
  }

  async getAllPermissions(user: UserPayload) {
    const permissions = await this.prisma.permission.findMany({});
    return permissions;
  }

  async updateUserRole(data: UpdateUserRoleDto) {
    const { id, permissions } = data;

    const currentUserRole = await this.prisma.userRole.findUnique({
      where: { id },
      include: { Permissions: true },
    });

    const currentUserIds =
      currentUserRole?.Permissions.map((user) => user.id) || [];

    await this.prisma.userRole.update({
      where: { id },
      data: {
        Permissions: {
          disconnect: currentUserIds.map((userId) => ({ id: userId })),
        },
      },
    });
    const updatedUserRole = await this.prisma.userRole.update({
      where: { id },
      data: {
        Permissions: {
          connect: permissions?.map((userId) => ({ id: userId })),
        },
      },
    });
    return updatedUserRole;
  }

  async resetPassword(data: ResetDto): Promise<UserProfile> {
    const { password: newPassword, userId } = data;
    const foundedUser = await this.prisma.userProfile.findUnique({
      where: { id: userId },
    });
    if (!foundedUser) throw new NotFoundException(ERR_NOT_FOUND_USER);
    // update user password
    return this.prisma.userProfile.update({
      where: { id: foundedUser.id },
      data: { password: bcrypt.hashSync(newPassword, 8) },
    });
  }
}
