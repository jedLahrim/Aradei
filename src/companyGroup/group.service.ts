import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCompanyGroupDto } from './dto/create-group.dto';
import { FilterCompanyGroupDto } from './dto/group-filter.dto';
import { UpdateCompanyGroupDto } from './dto/update-group.dto';
import { CompanyGroup } from './entities/company-group.entity';
import { CompanyGroupList } from './entities/company-group-list.entity';
import { AppError } from '../common/error/app-error';
import {
  ERR_COMPANY_GROUP_NOT_CREATED,
  ERR_NOT_FOUND_REQUEST as ERR_NOT_FOUND_GROUP_COMPANY,
} from '../common/error/error-code';

@Injectable()
export class CompanyGroupService {
  constructor(private prisma: PrismaService) {}

  async createCompanyGroup(data: CreateCompanyGroupDto): Promise<CompanyGroup> {
    const prismaData: any = {
      name: data.name,
    };

    if (data.companyId) {
      prismaData.companies = {
        connect: {
          id: data.companyId,
        },
      };
    }
    try {
      return await this.prisma.companyGroup.create({
        data: prismaData,
        include: {
          companies: true,
        },
      });
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_COMPANY_GROUP_NOT_CREATED, e),
      );
    }
  }

  async updateCompanyGroup(data: UpdateCompanyGroupDto): Promise<CompanyGroup> {
    const prismaData: any = {
      name: data.name,
    };
    if (data.companyIds) {
      prismaData.companies = {
        connect: data.companyIds.map((companyId) => {
          return {
            id: companyId,
          };
        }),
      };
    }
    try {
      return await this.prisma.companyGroup.update({
        where: {
          id: data.id,
        },
        data: prismaData,
        include: {
          companies: true,
        },
      });
    } catch (e) {
      throw new ConflictException(
        new AppError(ERR_COMPANY_GROUP_NOT_CREATED, e),
      );
    }
  }

  async getCompanyGroups(
    filter: FilterCompanyGroupDto,
  ): Promise<CompanyGroupList> {
    let where: any = {};

    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        switch (key) {
          case 'companyId':
            if (!('companies' in where)) {
              where.companies = {
                some: {
                  OR: [],
                },
              };
            }
            where.companies.some.OR.push({
              id: filter.companyId,
            });
            break;
          case 'contactId':
            if (!('companies' in where)) {
              where.companies = {
                some: {
                  OR: [],
                },
              };
            }
            where.companies.some.OR.push({
              brands: {
                some: {
                  contacts: {
                    some: {
                      id: filter.contactId,
                    },
                  },
                },
              },
            });
            break;
          case 'query':
            where.OR = [
              {
                name: {
                  contains: value,
                },
              },
            ];
            break;
        }
      }
    });

    const totalCount = await this.prisma.companyGroup.count({
      where: where,
    });

    const companyGroups = await this.prisma.companyGroup.findMany({
      take: filter.take,
      skip: filter.skip,
      where: where,
      include: {
        companies: {
          include: {
            brands: {
              include: {
                contacts: {
                  include: {
                    brands: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return new CompanyGroupList(companyGroups, totalCount);
  }

  async getCompanyGroup(id: string): Promise<CompanyGroup> {
    const companyGroup = await this.prisma.companyGroup.findFirst({
      where: {
        id,
      },
      include: {
        companies: {
          include: {
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
            brands: {
              include: {
                contacts: {
                  include: {
                    brands: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!companyGroup)
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_GROUP_COMPANY));
    return companyGroup;
  }

  async deleteCompanyGroup(id: string) {
    try {
      return await this.prisma.companyGroup.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_GROUP_COMPANY));
    }
  }
}
