import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateRetailCenterDto } from './dto/create-retailcenter.dto';
import { UpdateRetailCenterDto } from './dto/update-retailcenter.dto';
import { RetailCenter } from './entities/retailcenter.entity';
import { GetMallsDto } from './dto/get-malls.dto';
import { AppError } from '../common/error/app-error';
import {
  ERR_NOT_FOUND_RETAIL_CENTER,
  ERR_RETAIL_CENTER_NOT_CREATED,
} from '../common/error/error-code';
import { UserPayload } from '../auth/interface/user-payload';

@Injectable()
export class RetailCenterService {
  constructor(private prisma: PrismaService) {}

  async updateRetailCenter(data: UpdateRetailCenterDto, user: UserPayload) {
    const { id, pictures, informationContact, workHours, ...dataCleaned } =
      data;
    try {
      const rc = await this.prisma.retailCenter.update({
        where: {
          id,
        },
        data: {
          workHours: workHours,
          informationContact: informationContact,
          ...dataCleaned,
          pictures: {
            set: pictures.map((pic) => {
              return {
                id: pic,
              };
            }),
          },
        },
      });

      await this.prisma.history.create({
        data: {
          action: 'UPDATE_RETAIL_CENTER',
          retailCenter: {
            connect: {
              id: rc.id,
            },
          },
          creator: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return rc;
    } catch (e) {
      throw new Error(String(e));
    }
  }

  async createRetailCenter(data: CreateRetailCenterDto): Promise<RetailCenter> {
    try {
      const { workHours, informationContact, ...filteredData } = data;
      const createdRetailCenter = await this.prisma.retailCenter.create({
        data: {
          workHours: workHours,
          informationContact: informationContact,
          ...filteredData,
        },
      });

      return createdRetailCenter;
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_RETAIL_CENTER_NOT_CREATED, e),
      );
    }
  }

  async getRetailCenters(
    user: UserPayload,
    data: GetMallsDto,
  ): Promise<RetailCenter[]> {
    let wherePrisma;

    if (user.level !== 1) {
      wherePrisma = {
        projectId: undefined,
        city: undefined,
        type: undefined,
        query: undefined,
      };
    } else {
      wherePrisma = {
        projectId: undefined,
        city: undefined,
        type: undefined,
        query: undefined,
      };
    }

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        switch (key) {
          case 'projectId':
            wherePrisma.id = value;
            break;
          case 'city':
            wherePrisma.city = value;
            break;
          case 'type':
            wherePrisma.type = value;
            break;
          case 'query':
            wherePrisma.OR = [
              {
                id: {
                  startsWith: value,
                },
              },
              {
                alias: {
                  startsWith: value,
                },
              },
              {
                name: {
                  startsWith: value,
                },
              },
            ];
            break;
        }
      }
    });
    // const totalRetailCenters = await this.prisma.retailCenter.count({
    //   where: wherePrisma,
    // });
    const retailCenters = await this.prisma.retailCenter.findMany({
      where: wherePrisma,
      include: {
        documents: true,
        floors: {
          include: {
            retailCenter: true,
            units: {
              include: {
                mix: true,
                UnitsForecasts: true,
                category: true,
                features: true,
                bookings: {
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
                    units: true,
                    documents: true,
                  },
                },
                floor: {
                  include: {
                    retailCenter: true,
                  },
                },
              },
            },
            _count: {
              select: {
                units: true,
              },
            },
          },
        },
        _count: {
          select: {
            floors: true,
            documents: true,
          },
        },
      },
    });

    const profile = await this.prisma.userProfile.findUnique({
      where: {
        id: user.id,
      },
      include: {
        retailCenters: true,
      },
    });
    const filteredRetailCenters = retailCenters.filter((retailCenter) => {
      if (profile.roleId === 12 || profile.roleId === 22) {
        if (profile.retailCenters.length > 0) {
          return profile.retailCenters.some((rc) => rc.id === retailCenter.id);
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    return filteredRetailCenters;
  }

  async getRetailCenter(id: string): Promise<RetailCenter> {
    const retailCenter = await this.prisma.retailCenter.findFirst({
      where: {
        id,
      },
      include: {
        documents: true,
        commercialDocs: true,
        pictures: true,
        floors: {
          include: {
            commercialDocs: true,
            units: {
              include: {
                UnitsForecasts: true,
                mix: true,
                category: true,
                bookings: {
                  include: {
                    brand: true,
                    company: true,
                    documents: true,
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
                    units: true,
                  },
                },
                specialities: true,
                features: true,
                documents: true,
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
    if (!retailCenter)
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_RETAIL_CENTER));
    return retailCenter;
  }
}
