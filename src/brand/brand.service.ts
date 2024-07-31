import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { FilterBrandsDto } from './dto/filter-brands.dto';
import { BrandList } from './entities/brandList.entity';
import { AppError } from '../common/error/app-error';
import {
  ERR_BRAND_ALREADY_EXIST,
  ERR_NOT_CREATED_BRAND,
  ERR_NOT_FOUND_BRAND,
} from '../common/error/error-code';
import { SortType } from '../common/enums/sort-type.enum';
import { LeadSource, LeadStatus } from '../utils/enums/lead.enum';
import { UserPayload } from '../auth/interface/user-payload';
@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) { }

  async createBrand(data: CreateBrandDto, user: UserPayload): Promise<Brand> {
    const {
      companyId,
      mixId,
      pictures,
      logo,
      description,
      products,
      ...dataF
    } = data;

    const existingBrand = await this.prisma.brand.findFirst({
      where: {
        name: dataF.name,
      },
    });

    if (existingBrand) {
      throw new ConflictException(new AppError(ERR_BRAND_ALREADY_EXIST));
    }

    let companiesConnect = {};

    if (companyId) {
      companiesConnect = {
        companies: {
          connect: {
            id: companyId ?? undefined,
          },
        },
      };
    }

    let mixConnect = {};

    if (mixId) {
      mixConnect = {
        mix: {
          connect: {
            id: mixId,
          },
        },
      };
    }
    try {
      const createdBrand = await this.prisma.brand.create({
        data: {
          ...dataF,
          logo: logo ?? 'default',
          description: description ?? 'not set',
          products: products ?? 'not set',
          ...companiesConnect,
          ...mixConnect,
        },
      });

      await this.prisma.picture.createMany({
        data: pictures.map((pic) => {
          return {
            brandId: createdBrand.id,
            filePath: pic,
          };
        }),
      });

      return this.prisma.brand.findFirst({
        where: {
          id: createdBrand.id,
        },
        include: {
          mix: true,
          pictures: true,
          companies: {
            include: {
              companyGroup: true,
            },
          },
        },
      });
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_NOT_CREATED_BRAND, e),
      );
    }
  }

  async updateBrand(data: UpdateBrandDto, user: UserPayload): Promise<Brand> {
    const { brandId, ...dataCleaned } = data;

    return this.prisma.brand.update({
      where: {
        id: brandId,
      },
      data: {
        ...dataCleaned,
      },
      include: {
        companies: true,
      },
    });
  }

  async deleteBrand(id: string) {
    const deletedBrand = await this.prisma.brand.delete({
      where: {
        id,
      },
    });

    return !!deletedBrand;
  }

  async getBrand(user: UserPayload, brandId: string): Promise<Brand> {
    const brand = await this.prisma.brand.findUnique({
      where: {
        id: brandId,
      },
      include: {
        companies: {
          include: {
            brands: true,
            companyGroup: true,
          },
        },
        mix: true,
        pictures: true,
        contacts: true,
        techDocs: true,
        bookings: {
          include: {
            brand: true,
            creator: true,
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
      },
    });
    if (!brand) throw new NotFoundException(new AppError(ERR_NOT_FOUND_BRAND));
    return brand;
  }

  async getBrands(
    data: FilterBrandsDto,
    user: UserPayload,
  ): Promise<BrandList> {
    let where: {
      source?: LeadSource;
      status?: LeadStatus;
      query?: string;
      OR?: any[];
    } = {};

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        switch (key) {
          case 'source':
            where.source = value;
            break;
          case 'status':
            where.status = value;
            break;
          case 'query':
            where.OR = [
              {
                name: {
                  contains: value,
                },
              },
              {
                description: {
                  contains: value,
                },
              },
              {
                products: {
                  contains: value,
                },
              },
            ];

            break;
        }
      }
    });

    const totalBrands = await this.prisma.brand.count({
      where: where,
    });

    const brands = await this.prisma.brand.findMany({
      take: data.take,
      skip: data.skip,
      where: where,
      include: {
        contacts: true,
        companies: {
          include: {
            companyGroup: true,
          },
        },
        bookings: true,
      },
      orderBy: {
        createdAt: SortType.desc,
      },
    });

    return new BrandList(brands, totalBrands);
  }
}
