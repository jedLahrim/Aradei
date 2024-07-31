import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';

import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { createNewPopstoresRequestDto } from './dto/create-new-popstores-request.dto';
import { ProspectRequest } from './entities/prospectRequest.entity';
import { FilterCompanyDto } from './dto/filter-companies.dto';
import { CompanyList } from './entities/companyList.entity';
import { CreateRequestDto } from './dto/CreateRequest.dto';
import { AppError } from '../common/error/app-error';
import {
  ERR_NOT_CREATED_COMPANY,
  ERR_NOT_FOUND_COMPANY,
  ERR_NOT_FOUND_GROUP_COMPANY,
  ERR_NOT_FOUND_REQUEST,
  ERR_PROSPECT_REQUEST_NOT_CREATED,
} from '../common/error/error-code';
import { SortType } from '../common/enums/sort-type.enum';
import { CompanyType } from '../utils/enums/lead.enum';
import { UserPayload } from '../auth/interface/user-payload';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async validateCompany(user: UserPayload, companyId: string) {
    try {
      return await this.prisma.company.update({
        data: {
          validator: {
            connect: {
              id: user.id,
            },
          },
          isValidated: true,
        },
        where: {
          id: companyId,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_COMPANY));
    }
  }

  async deleteCompany(
    user: UserPayload,
    companyId: string,
  ): Promise<Company | null> {
    try {
      return await this.prisma.company.delete({
        where: {
          id: companyId,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_COMPANY));
    }
  }

  async updateCompany(
    user: UserPayload,
    data: UpdateCompanyDto,
  ): Promise<Company> {
    const { companyId, ...dataF } = data;
    const company = await this.prisma.company.update({
      where: {
        id: companyId,
      },
      data: {
        ...dataF,
      },
    });
    if (!company) throw new NotFoundException(ERR_NOT_FOUND_COMPANY);
    return company;
  }
  async createNewPopstoresRequest(
    data: createNewPopstoresRequestDto,
  ): Promise<ProspectRequest> {
    try {
      return await this.prisma.prospectRequest.create({
        data,
      });
    } catch (e) {
      throw new ConflictException(
        new AppError(ERR_PROSPECT_REQUEST_NOT_CREATED, e),
      );
    }
  }

  async createCompany(
    data: CreateCompanyDto,
    user: UserPayload,
  ): Promise<Company> {
    const { request, groupId, ...dataF } = data;

    let connectGroup = {};
    if (groupId) {
      // check if companyGroup exist in db
      await this.checkIfCompanyGroupExist(groupId);
      connectGroup = {
        companyGroup: {
          connect: {
            id: groupId,
          },
        },
      };
    }
    try {
      return await this.prisma.company.create({
        data: {
          ...dataF,
          ...connectGroup,
          managerName: 'N/A',
          managerID: 'N/A',
          creator: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_NOT_CREATED_COMPANY, e),
      );
    }
  }

  async markRequestAsDone(id: string) {
    const updatedRequest = await this.prisma.request.update({
      where: {
        id,
      },
      data: {
        isDone: true,
      },
    });
    if (!updatedRequest) throw new NotFoundException(ERR_NOT_FOUND_REQUEST);
    return updatedRequest;
  }

  async deleteRequest(id: string) {
    try {
      return await this.prisma.request.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new NotFoundException(ERR_NOT_FOUND_REQUEST);
    }
  }

  async createRequest(data: CreateRequestDto) {
    if (!data.companyId) {
      return new BadRequestException('Company is required');
    }
    if (!data.contactId) {
      return new BadRequestException('Contact is required');
    }
    if (!data.brandId) {
      return new BadRequestException('Brand is required');
    }

    const request = this.prisma.request.create({
      include: {
        brand: true,
        contact: true,
        company: true,
      },
      data: {
        message: data.message,
        company: {
          connect: {
            id: data.companyId,
          },
        },
        brand: {
          connect: {
            id: data.brandId,
          },
        },
        contact: {
          connect: {
            id: data.contactId,
          },
        },
      },
    });
    if (!request) throw new NotFoundException(ERR_NOT_FOUND_REQUEST);
    return request;
  }

  async getCompanies(user, filter: FilterCompanyDto): Promise<CompanyList> {
    const { type, query } = filter;
    let where: {
      type?: CompanyType;
      query?: string;
      OR?: any[];
    } = {};
    if (type) where.type = type;
    if (query)
      where.OR = [
        {
          name: {
            contains: query,
          },
        },
      ];

    const totalCompanies = await this.prisma.company.count({
      where: where,
    });

    const companies = await this.prisma.company.findMany({
      take: filter.take,
      skip: filter.skip,
      where: where,
      orderBy: {
        createdAt: SortType.desc,
      },
      include: {
        requests: true,
        creator: true,
        brands: {
          include: {
            contacts: true,
            companies: true,
          },
        },
        _count: { select: { brands: true, bookings: true } },
        companyGroup: true,
        bookings: {
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
          },
        },
      },
    });

    return new CompanyList(companies, totalCompanies);
  }

  async getOneCompany(user: UserPayload, companyId: string): Promise<Company> {
    const company = await this.prisma.company.findUnique({
      where: {
        id: companyId,
      },
      include: {
        creator: true,
        requests: {
          include: {
            brand: true,
            company: true,
            contact: true,
          },
        },
        companyGroup: true,
        bookings: {
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
            creator: true,
            validators: true,
            quoteEdits: {
              include: {
                quote: true,
              },
            },
            documents: {
              include: {
                floor: true,
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
            brand: true,
            company: true,
          },
          orderBy: {
            createdAt: 'desc',
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
        documents: true,
      },
    });
    if (!company)
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_COMPANY));
    return company;
  }

  private async checkIfCompanyGroupExist(groupId: string) {
    const companyGroup = await this.prisma.companyGroup.findFirst({
      where: { id: groupId },
    });
    if (!companyGroup)
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_GROUP_COMPANY));
  }
}
