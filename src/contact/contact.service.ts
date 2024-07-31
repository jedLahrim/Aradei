import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';
import { ContactList } from './entities/contactList.entity';
import { isTenant } from './utils/isTenant';
import { GetContactsDto } from './dto/get-contacts.dto';
import { UpdateLeadRelationsDto } from './dto/update-lead-relations';
import { AppError } from '../common/error/app-error';
import {
  ERR_COMPANY_GROUP_NOT_CREATED,
  ERR_NOT_FOUND_CONTACT,
} from '../common/error/error-code';
import { History } from '../history/entities/history.entity';
import { UserPayload } from '../auth/interface/user-payload';
import { SortType } from '../common/enums/sort-type.enum';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) { }

  async createContact(
    data: CreateContactDto,
    user: UserPayload,
  ): Promise<Contact> {
    const { brandId, ...dataF } = data;

    const contactData = {
      email: dataF.email,
      name: dataF.name,
      jobTitle: dataF.position,
      firstName: dataF.firstname,
      phone: dataF.phone,
      mobilePhone: dataF.mobile,
      picture: 'default',
      roleId: 99,
      retailCenters: [],
    };

    const contactProfile = await this.userService.registerUser(
      contactData,
      user,
    );

    let brandConnect = {};

    if (brandId) {
      brandConnect = {
        brands: {
          connect: {
            id: brandId,
          },
        },
      };
    }
    let createdContact: Contact;
    let history: History;
    try {
      // start transaction
      await this.prisma.$transaction(async (prisma) => {
        createdContact = await prisma.contact.create({
          data: {
            ...dataF,
            creator: {
              connect: {
                id: user.id,
              },
            },
            ...brandConnect,
          },
        });

        const dataHistory = {
          action: 'NEW LEAD CREATED',
          contactHistoryId: createdContact.id,
        };

        history = await prisma.history.create({
          data: {
            action: dataHistory.action,
            creator: {
              connect: {
                id: user.id,
              },
            },
            contact: {
              connect: {
                id: dataHistory.contactHistoryId,
              },
            },
          },
        });
      });
      return createdContact;
    } catch (e) {
      // Rollback in case of error
      console.error('Transaction failed', e);
      if (createdContact)
        await this.prisma.contact.delete({
          where: {
            id: createdContact.id,
          },
        });
      if (history)
        await this.prisma.history.delete({
          where: {
            id: history.id,
          },
        });
      throw new InternalServerErrorException(
        new AppError(ERR_COMPANY_GROUP_NOT_CREATED, e),
      );
    }
  }

  async createPopstoresContact(data: CreateContactDto): Promise<Contact> {
    const { brandId, ...dataF } = data;
    let createdContact: Contact;
    let history: History;
    try {
      // start transaction
      await this.prisma.$transaction(async (prisma) => {
        createdContact = await prisma.contact.create({
          data: {
            ...dataF,
            creator: {
              connect: {
                id: '000000000000',
              },
            },
            brands: {
              connect: {
                id: brandId,
              },
            },
          },
        });

        const dataHistory = {
          action: 'NEW LEAD CREATED',
          contactHistoryId: createdContact.id,
        };

        // INSERT HISTORY
        const history = await prisma.history.create({
          data: {
            action: dataHistory.action,
            creator: {
              connect: {
                id: '000000000000',
              },
            },
            contact: {
              connect: {
                id: dataHistory.contactHistoryId,
              },
            },
          },
        });
      });
      return createdContact;
    } catch (e) {
      // Rollback in case of error
      console.error('Transaction failed', e);
      if (createdContact)
        await this.prisma.contact.delete({
          where: {
            id: createdContact.id,
          },
        });
      if (history)
        await this.prisma.history.delete({
          where: {
            id: history.id,
          },
        });
      throw new InternalServerErrorException(
        new AppError(ERR_COMPANY_GROUP_NOT_CREATED, e),
      );
    }
  }

  async updateContact(
    data: UpdateContactDto,
    user: UserPayload,
  ): Promise<Contact> {
    const { contactId, ...dataCleaned } = data;
    try {
      const updatedContact = await this.prisma.contact.update({
        where: {
          id: contactId,
        },
        data: {
          ...dataCleaned,
        },
        include: {
          brands: true,
          requests: true,
        },
      });
      return updatedContact;
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_CONTACT));
    }
  }

  async deleteContact(id: string) {
    const deletedContact = await this.prisma.contact.delete({
      where: {
        id,
      },
    });

    return !!deletedContact;
  }

  async setArchived(
    user: UserPayload,
    data: { contactId: string; archived: boolean },
  ): Promise<Contact> {
    try {
      return await this.prisma.contact.update({
        where: {
          id: data.contactId,
        },
        data: {
          isArchived: data.archived,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_CONTACT));
    }
  }

  async getContact(user: UserPayload, leadId: string): Promise<Contact> {
    const lead = await this.prisma.contact.findUnique({
      where: {
        id: leadId,
      },
      include: {
        brands: {
          include: {
            companies: {
              include: {
                companyGroup: true,
                brands: true,
              },
            },
          },
        },
        creator: true,
        requests: {
          include: {
            company: {
              include: {
                companyGroup: true,
              },
            },
            contact: true,
            brand: true,
          },
        },
        histories: {
          include: {
            creator: true,
          },
        },
        bookings: {
          include: {
            brand: true,
            documents: {
              include: {
                creator: true,
                validators: true,
                booking: {
                  include: {
                    brand: true,
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
            company: {
              include: {
                companyGroup: true,
              },
            },
            proposalEdits: {
              include: {
                creator: true,
                booking: true,
              },
            },
            quoteEdits: {
              include: {
                creator: true,
                booking: true,
                quote: true,
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
    if (!lead) throw new NotFoundException(new AppError(ERR_NOT_FOUND_CONTACT));
    return lead;
  }

  async searchContacts(query: string, user: UserPayload) {
    if (!query) return;
    return this.prisma.contact.findMany({
      where: {
        OR: [
          {
            name: {
              startsWith: query,
            },
          },
          {
            firstname: {
              startsWith: query,
            },
          },
          {
            brands: {
              some: {
                name: {
                  startsWith: query,
                },
              },
            },
          },
        ],
      },
      include: {
        brands: true,
      },
      orderBy: {
        createdAt: SortType.desc,
      },
    });
  }

  async getContacts(
    user: UserPayload,
    data: GetContactsDto,
  ): Promise<ContactList> {
    const wherePrisma: {
      source?: string;
      query?: string;
      OR?: any[];
    } = {};

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        switch (key) {
          case 'source':
            wherePrisma.source = value;
            break;
          case 'query':
            wherePrisma.OR = [
              {
                name: {
                  contains: value,
                },
              },
              {
                firstname: {
                  contains: value,
                },
              },
              {
                email: {
                  contains: value,
                },
              },
            ];
            break;
        }
      }
    });

    const contacts = await this.prisma.contact.findMany({
      where: wherePrisma,
      orderBy: {
        createdAt: SortType.desc,
      },
      take: data.take,
      skip: data.skip,
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
        creator: true,
        requests: true,
        bookings: {
          include: {
            units: true,
            brand: true,
            company: {
              include: {
                companyGroup: true,
              },
            },
          },
        },
      },
    });
    const totalContacts = await this.prisma.contact.count({
      where: wherePrisma,
    });

    return new ContactList(contacts, totalContacts);
  }

  async getTenants(user: UserPayload): Promise<Contact[]> {
    const tenants = await this.prisma.contact.findMany({
      include: {
        brands: true,

        creator: true,
        bookings: {
          include: {
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
      orderBy: {
        createdAt: SortType.desc,
      },
    });

    const finalTenants = [];
    tenants.forEach((contact) => {
      const isTenantRes = isTenant(contact.bookings);
      if (isTenantRes == 1) {
        finalTenants.push(contact);
      }
    });

    return finalTenants;
  }

  async updateLeadRelations(data: UpdateLeadRelationsDto): Promise<Boolean> {
    if (data.contactId && data.brandId) {
      await this.prisma.contact.update({
        where: {
          id: data.contactId,
        },
        data: {
          brands: {
            connect: {
              id: data.brandId,
            },
          },
        },
      });
    }
    if (data.companyId && data.brandId) {
      await this.prisma.brand.update({
        where: {
          id: data.brandId,
        },
        data: {
          companies: {
            connect: {
              id: data.companyId,
            },
          },
        },
      });
    }
    if (data.companyId && data.groupId) {
      await this.prisma.company.update({
        where: {
          id: data.companyId,
        },
        data: {
          companyGroup: {
            connect: {
              id: data.groupId,
            },
          },
        },
      });
    }

    return true;
  }
}
