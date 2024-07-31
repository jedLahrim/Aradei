import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';
import { writeFile } from 'fs/promises';
import * as path from 'path';
import { SVGManager } from 'src/utils/SVGManager';
import { PrismaService } from '../prisma.service';
import { CreateUnitsGrpDto } from './dto/create-unit-grp.dto';
import { CreateUnitDto } from './dto/create-unit.dto';
import { GetUnitsDto } from './dto/get-units.dto';
import { InputUnitFloorAndDateSearch } from './dto/input-floor-date-search';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Unit } from './entities/unit.entity';
import { getUnitStatus } from './utils/unitStatus';
import { FilterUnitsDto } from './dto/filter-units.dto';
import { UnitLogoMetadata } from './entities/unitLogoMetadata.entity';
import { GetUnitsLogoMetadataDto } from './dto/get-unit-logo-metadata.dto';
import { BulkUnitLogoMetadataDto } from './dto/bulk-unit-logo-metadata.dto';
import { UpdateUnitLogoMetadataDto } from './dto/update-unit-logo-metadata.dto';
import { CreateUnitLogoMetadataDto } from './dto/create-unit-logo-metadata.dto';
import { CreateBulkUnitListDto } from './dto/create-bulk-unit.dto';
import { ClientManager } from '../prisma/ClientManager';

@Injectable()
export class UnitService {
  constructor(private prisma: PrismaService) {}

  async createBulkUnit(data: CreateBulkUnitListDto) {
    await this.prisma.unit.createMany({
      data: data.units.map((u) => {
        return {
          ...u,
          dependency: false,
          description: '',
          monthPrice: 0,
          status: 2,
          mixId: ClientManager.getClient().name == 'Marjane' ? 1 : 9,
          width: 0,
          depth: 0,
        };
      }),
    });

    return true;
  }

  async getSpecialties() {
    return await this.prisma.speciality.findMany();
  }

  async getFeatures() {
    return await this.prisma.feature.findMany();
  }

  async getMixes() {
    return await this.prisma.mix.findMany();
  }

  async getCategories() {
    return await this.prisma.category.findMany();
  }

  async getUnitStats(user, retailCenterId, rentType) {
    const units = await this.prisma.unit.findMany({
      where: {
        rentType: rentType ?? undefined,
        floor: {
          retailCenter: {
            id: retailCenterId ?? undefined,
            UserProfile:
              user.level !== 22 && user.level !== 12
                ? undefined
                : {
                    some: {
                      id: user.id,
                    },
                  },
          },
        },
      },
      include: {
        bookings: true,
        floor: true,
      },
    });

    units.forEach((unit) => {
      const unitStatus = getUnitStatus(unit.bookings);
      unit.status = unitStatus;
    });

    const rentTypeStats = units.reduce((result, unit) => {
      const rentType = unit.rentType;
      const status = unit.status;

      if (!result[rentType]) {
        result[rentType] = {
          rentType,
          booked: 0,
          total: 0,
        };
      }

      result[rentType].total++;

      if (status === 1) {
        result[rentType].booked++;
      }

      return result;
    }, {});

    const stats = Object.values(rentTypeStats);

    const unitStats = {
      stats,
      totalBooked: stats.reduce((total, { booked }) => total + booked, 0),
      totalUnits: units.length,
    };

    return unitStats;
  }

  async getFilteredUnits(user, data: FilterUnitsDto) {
    const wherePrisma: any = {};

    if (data.dependencies.length > 0) {
      wherePrisma.dependency = true;
      if (data.dependencies.includes(0)) {
        wherePrisma.terrasse = {
          not: null,
        };
      }
      if (data.dependencies.includes(1)) {
        wherePrisma.mezzanine = {
          not: null,
        };
      }
      if (data.dependencies.includes(2)) {
        wherePrisma.storage = {
          not: null,
        };
      }
    }

    if (data.query) {
      wherePrisma.OR = [
        {
          alias: {
            contains: data.query,
          },
        },
        {
          unitId: {
            contains: data.query,
          },
        },
      ];
    }
    if (data.gla.length === 2) {
      wherePrisma.surface = {
        gte: data.gla[0],
        lte: data.gla[1],
      };
    }
    if (data.types.length > 0) {
      wherePrisma.rentType = {
        in: data.types,
      };
    }
    const currentDateIso = new Date();
    if (data.companies.length > 0) {
      wherePrisma.bookings = {
        some: {
          AND: [
            {
              status: 3,
              dateFrom: { lt: currentDateIso },
              dateTo: { gt: currentDateIso },
            },
            {
              companyId: {
                in: data.companies,
              },
            },
          ],
        },
      };
    }
    if (data.brands.length > 0) {
      wherePrisma.bookings = {
        some: {
          AND: [
            {
              status: 3,
              dateFrom: { lt: currentDateIso },
              dateTo: { gt: currentDateIso },
            },
            {
              brandId: {
                in: data.brands,
              },
            },
          ],
        },
      };
    }
    if (data.dateRange.length > 0) {
      wherePrisma.bookings = {
        none: {
          status: 3,
          OR: [
            {
              dateFrom: { lte: new Date(data.dateRange[0]) },
              dateTo: { gte: new Date(data.dateRange[1]) },
            },
            {
              dateFrom: {
                gte: new Date(data.dateRange[0]),
                lte: new Date(data.dateRange[1]),
              },
            },
            {
              dateTo: {
                gte: new Date(data.dateRange[0]),
                lte: new Date(data.dateRange[1]),
              },
            },
          ],
        },
      };
    }

    if (data.mixes.length > 0) {
      wherePrisma.mixId = {
        in: data.mixes,
      };
    }
    if (data.floors.length > 0) {
      wherePrisma.floor = {
        id: {
          in: data.floors,
        },
      };
    }
    if (data.assets.length > 0) {
      if ('floor' in wherePrisma) {
        wherePrisma.floor.retailCenterId = {
          in: data.assets,
        };
      } else {
        wherePrisma.floor = {
          retailCenterId: {
            in: data.assets,
          },
        };
      }
    }

    if (data.retailCenter && data.assets.length === 0) {
      if ('floor' in wherePrisma) {
        wherePrisma.floor.retailCenterId = data.retailCenter;
      } else {
        wherePrisma.floor = {
          retailCenterId: data.retailCenter,
        };
      }
    }
    if (user.level === 22 || user.level === 12) {
      if ('assets' in data && data.assets.length > 0) {
        wherePrisma.floor = {
          retailCenterId: {
            in: data.assets,
          },
        };
      } else {
        const userProfile = await this.prisma.userProfile.findUnique({
          where: {
            id: user.id,
          },
          include: {
            retailCenters: true,
          },
        });

        if (userProfile && userProfile.retailCenters.length > 0) {
          const retailCenterIds = userProfile.retailCenters.map((rc) => rc.id);
          wherePrisma.floor = {
            retailCenterId: {
              in: retailCenterIds,
            },
          };
        } else {
          return { filteredUnits: [], totalUnits: 0 };
        }
      }
    }
    if (data.status !== null && data.status !== undefined) {
      switch (data.status) {
        case 0:
          wherePrisma.bookings = {
            none: {
              status: 3,
              dateFrom: { lt: currentDateIso },
              dateTo: { gt: currentDateIso },
            },
          };
          break;
        case 1:
          wherePrisma.bookings = {
            none: {
              status: 3,
            },
            some: {
              documents: {
                none: {
                  type: 'CONTRACT',
                },
                some: {
                  type: 'HOT',
                },
              },
            },
          };
          break;
        case 2:
          wherePrisma.bookings = {
            none: {
              status: 3,
            },
            some: {
              documents: {
                some: {
                  type: 'CONTRACT',
                },
              },
            },
          };
          break;
        case 3:
          wherePrisma.bookings = {
            some: {
              status: 3,
              dateFrom: { lt: currentDateIso },
              dateTo: { gt: currentDateIso },
            },
          };
          break;
      }
    }
    const totalUnits = await this.prisma.unit.count({ where: wherePrisma });

    const units = await this.prisma.unit.findMany({
      take: data.take,
      skip: data.skip,
      where: wherePrisma,
      include: {
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
          },
        },
        specialities: true,
        UnitsForecasts: true,

        documents: true,
        histories: {
          include: {
            unit: true,
          },
        },
        mix: {
          include: {
            MixCategory: true,
          },
        },
        category: true,
        floor: {
          include: {
            retailCenter: true,
          },
        },
        _count: {
          select: {
            bookings: true,
            documents: true,
          },
        },
      },
    });

    const unitsRes = { units, totalUnits };

    return unitsRes;
  }

  async getUnits(user, data: GetUnitsDto) {
    let wherePrisma;

    if (user.level !== 1) {
      wherePrisma = {
        status: undefined,
        retailCenter: undefined,
        floor: undefined,
        mix: undefined,
        rentType: undefined,
        query: undefined,
      };
    } else {
      wherePrisma = {
        status: undefined,
        retailCenter: undefined,
        floor: undefined,
        mix: undefined,
        rentType: undefined,
        query: undefined,
      };
    }

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        switch (key) {
          case 'floor':
            wherePrisma.floor = {
              is: {
                id: value,
              },
            };
            break;
          case 'mix':
            wherePrisma.mix = {
              is: {
                id: value,
              },
            };
            break;
          case 'retailCenter':
            wherePrisma.floor = {
              is: {
                retailCenterId: value,
              },
            };
            break;
          case 'rentType':
            wherePrisma.rentType = value;
            break;
          case 'query':
            wherePrisma.OR = [
              {
                alias: {
                  contains: value,
                },
              },
              {
                unitId: {
                  contains: value,
                },
              },
            ];

            break;
        }
      }
    });

    const totalUnits = await this.prisma.unit.count({ where: wherePrisma });

    const units = await this.prisma.unit.findMany({
      take: data.take,
      skip: data.skip,
      where: wherePrisma,
      include: {
        bookings: {
          include: {
            brand: true,
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
        specialities: true,
        UnitsForecasts: true,

        documents: true,
        histories: {
          include: {
            unit: true,
          },
        },
        mix: true,
        category: true,
        floor: {
          include: {
            retailCenter: true,
          },
        },
        _count: {
          select: {
            bookings: true,
            documents: true,
          },
        },
      },
    });

    const unitsRes = { units, totalUnits };
    unitsRes.units.forEach((unit) => {
      const unitStatus = getUnitStatus(unit.bookings);
      unit.status = unitStatus;
    });

    let unitResFinal;

    if (data.status === 0 || data.status === 1) {
      unitResFinal = unitsRes.units.filter(
        (unit) => unit.status === data.status,
      );
    } else {
      unitResFinal = unitsRes;
    }

    return unitResFinal;
  }

  async getPopstoresUnits(data: GetUnitsDto) {
    const wherePrisma = {
      status: undefined,
      retailCenter: undefined,
      floor: undefined,
      mix: undefined,
      rentType: undefined,
    };

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        switch (key) {
          case 'floor':
            wherePrisma.floor = {
              is: {
                id: value,
              },
            };
            break;
          case 'mix':
            wherePrisma.mix = {
              is: {
                id: value,
              },
            };
            break;
          case 'retailCenter':
            wherePrisma.floor = {
              is: {
                retailCenterId: value,
              },
            };
            break;
          case 'rentType':
            wherePrisma.rentType = value;

            break;
        }
      }
    });

    const totalUnits = await this.prisma.unit.count();

    const units = await this.prisma.unit.findMany({
      take: data.take,
      skip: data.skip,
      where: wherePrisma,
      include: {
        bookings: {
          include: {
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
        specialities: true,
        UnitsForecasts: true,
        documents: true,
        histories: {
          include: {
            unit: true,
          },
        },
        mix: true,
        floor: {
          include: {
            retailCenter: true,
          },
        },
        _count: {
          select: {
            bookings: true,
            documents: true,
          },
        },
      },
    });

    const unitsRes = { units, totalUnits };
    unitsRes.units.forEach((unit) => {
      const unitStatus = getUnitStatus(unit.bookings);
      unit.status = unitStatus;
    });

    let unitResFinal;

    if (data.status === 0 || data.status === 1) {
      unitResFinal = unitsRes.units.filter(
        (unit) => unit.status === data.status,
      );
    } else {
      unitResFinal = unitsRes;
    }

    return unitResFinal;
  }

  async getUnit(unitId: string) {
    const unit = await this.prisma.unit.findFirst({
      where: {
        id: unitId,
      },
      include: {
        pictures: true,
        bookings: {
          include: {
            contract: true,
            creator: true,
            brand: {
              include: {
                contacts: true,
                companies: true,
              },
            },
            company: true,
            proposalEdits: true,
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
          },
        },
        documents: true,
        histories: {
          include: {
            unit: true,
          },
        },
        specialities: true,
        UnitsForecasts: true,
        mix: {
          include: {
            MixCategory: {
              include: {
                subMixes: true,
              },
            },
          },
        },
        category: true,
        features: true,
        floor: {
          include: {
            retailCenter: true,
          },
        },
        _count: {
          select: {
            bookings: true,
            documents: true,
          },
        },
      },
    });

    const unitStatus = getUnitStatus(unit.bookings);
    const unitRes = unit;
    unitRes.status = unitStatus;
    return unitRes;
  }

  async getPopstoresUnit(unitId: string) {
    const unit = await this.prisma.unit.findFirst({
      where: {
        id: unitId,
      },
      include: {
        pictures: true,
        bookings: {
          include: {
            contract: true,
            creator: true,
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
        documents: true,
        histories: {
          include: {
            unit: true,
          },
        },
        specialities: true,
        UnitsForecasts: true,
        mix: true,
        features: true,
        floor: {
          include: {
            retailCenter: true,
          },
        },
        _count: {
          select: {
            bookings: true,
            documents: true,
          },
        },
      },
    });

    const unitStatus = getUnitStatus(unit.bookings);
    const unitRes = unit;
    unitRes.status = unitStatus;
    return unitRes;
  }

  async deleteUnitPic(unitId: string, picId: string, user) {
    await this.prisma.unit.update({
      where: {
        id: unitId,
      },
      data: {
        pictures: {
          disconnect: {
            id: picId,
          },
        },
      },
    });

    const picFile = await this.prisma.picture.findUnique({
      where: {
        id: picId,
      },
    });
    const file = path.join(__dirname, `../../../${picFile.filePath}`);

    fs.unlink(file, function (err) {
      if (err) {
        console.error(err);
      }
    });

    await this.prisma.picture.delete({
      where: {
        id: picId,
      },
    });

    return true;
  }

  async setUnitPics(data, user): Promise<Unit> {
    const unitPictures = [];

    Promise.all(
      data.pics.map(async (pic) => {
        const picCreated = await this.prisma.picture.create({
          data: {
            filePath: pic.filePath,
            unit: {
              connect: {
                id: data.unitId,
              },
            },
          },
        });
        unitPictures.push(picCreated);
      }),
    );

    const updatedUnit = await this.prisma.unit.update({
      where: {
        id: data.unitId,
      },
      data: {
        pictures: {
          connect: unitPictures.map((pic) => ({ id: pic.id })) || [],
        },
      },
    });

    return updatedUnit;
  }

  async updateUnit(data: UpdateUnitDto): Promise<Unit | null> {
    const {
      features,
      mixId,
      categoryId,
      specialties,
      unitId,
      id,
      ...dataCleaned
    } = data;

    await this.prisma.unit.update({
      where: {
        id,
      },
      data: {
        features: {
          set: [],
        },
        specialities: {
          set: [],
        },
      },
    });

    const updatedUnit = await this.prisma.unit.update({
      where: {
        id,
      },
      include: {
        histories: true,
        mix: true,
      },
      data: {
        ...dataCleaned,
        specialities: {
          connect: specialties.map((c) => ({ id: c.id })) || [],
        },
        features: {
          connect: features.map((c) => ({ id: c.id })) || [],
        },
        mix: {
          connect: {
            id: mixId || 9,
          },
        },
        category: {
          connect: {
            id: categoryId || 3,
          },
        },
      },
    });

    return updatedUnit;
  }

  async createUnit(data: CreateUnitDto): Promise<Unit | null> {
    const unit = this.prisma.unit.create({
      data: {
        unitId: data.unitId,
        alias: data.alias,
        floor: {
          connect: {
            id: data.floorId,
          },
        },
        status: data.status,
        rentType: data.rentType,
        specialities: {
          connect: data.specialtyIds.map((id) => {
            return {
              id,
            };
          }),
        },
        videoFormat: data.videoFormat,
        videoLength: data.videoLength,
        mix: {
          connect: {
            id: data.mixId ?? 9,
          },
        },
        category: {
          connect: {
            id: data.categoryId ?? 3,
          },
        },
        surface: data.surface,
        width: Number(data.widthMeters),
        depth: data.depthMeters,
        measurementUnit: 'meters',
        facadeLength: null,
        qty: 1,
        maxHeight: null,
        dependency: data.dependency,
        features: {
          connect: data.features.map((id) => {
            return {
              id,
            };
          }),
        },
        dayPrice: data.dayPrice,
        weekPrice: data.weekPrice,
        monthPrice: data.monthPrice,
        sqMeterPrice: data.sqmetersPrice,
        sqMeterPriceSecondYear: 0,
        sqMeterPriceThirdYear: 0,
        description: data.description,
        specialTerms: data.specialTerms,
        mainPicture: data.picture,
      },
    });

    return unit;
  }

  async removeUnit(unitId: string): Promise<boolean> {
    const unit = await this.prisma.unit.findUnique({
      where: {
        id: unitId,
      },
      include: {
        floor: true,
        bookings: true,
      },
    });
    if (!unit) throw new Error('Unit not found');
    if (unit.isGroup) throw new Error('Cannot delete group unit');
    if (unit.bookings.length > 0)
      throw new Error('Unit with bookings cannot be deleted');

    const svgFilePath = `http://localhost:${process.env.PORT}${unit.floor.svgBluePrint}`;

    const svgFileContent = await axios.get<string>(svgFilePath);

    const newSVG = await SVGManager.deleteElement(
      svgFileContent.data,
      unit.unitId,
    );

    const outUrl = path.join(__dirname, '../../../', unit.floor.svgBluePrint);
    await writeFile(outUrl, newSVG, 'utf-8');

    await this.prisma.unit.delete({
      where: {
        id: unit.id,
      },
    });

    return true;
  }

  async createUnitsGroup(data: CreateUnitsGrpDto): Promise<Unit | null> {
    const groups = await this.prisma.unitGroup.findMany({
      include: {
        Units: true,
      },
      where: {
        Units: {
          some: {
            id: {
              in: data.unitsIds,
            },
          },
        },
      },
    });

    if (groups.length > 0) {
      throw new Error(
        `Units ${groups
          .map((group) => group.Units.map((unit) => unit.unitId).join(', '))
          .join(', ')} already in group`,
      );
    }

    const unitGroup = await this.prisma.unitGroup.create({
      include: {
        Units: true,
      },
      data: {
        Units: {
          connect: data.unitsIds.map((id) => {
            return {
              id,
            };
          }),
        },
      },
    });

    const unit = await this.prisma.unit.create({
      include: {
        floor: true,
      },
      data: {
        isGroup: true,
        UnitGroup: {
          connect: {
            id: unitGroup.id,
          },
        },
        unitId: data.unitId,
        alias: data.alias,
        floor: {
          connect: {
            id: data.floorId,
          },
        },
        status: data.status,
        rentType: data.rentType,
        specialities: {
          connect: data.specialtyIds.map((id) => {
            return {
              id,
            };
          }),
        },
        videoFormat: data.videoFormat,
        videoLength: data.videoLength,
        mix: {
          connect: {
            id: data.mixId ?? 9,
          },
        },
        category: {
          connect: {
            id: data.categoryId ?? 3,
          },
        },
        surface: data.surface,
        width: Number(data.widthMeters),
        depth: data.depthMeters,
        measurementUnit: 'meters',
        facadeLength: null,
        qty: 1,
        maxHeight: null,
        dependency: data.dependency,
        features: {
          connect: data.features.map((id) => {
            return {
              id,
            };
          }),
        },
        dayPrice: data.dayPrice,
        weekPrice: data.weekPrice,
        monthPrice: data.monthPrice,
        sqMeterPrice: data.sqmetersPrice,
        sqMeterPriceSecondYear: 0,
        sqMeterPriceThirdYear: 0,
        description: data.description,
        specialTerms: data.specialTerms,
      },
    });

    const svgFilePath = `http://localhost:${process.env.PORT}${unit.floor.svgBluePrint}`;

    const svgFileContent = await axios.get<string>(svgFilePath);

    const newSVG = await SVGManager.groupElements(
      svgFileContent.data,
      unitGroup.Units.map((unit) => unit.unitId),
      unit.unitId,
    );

    const svgPath = unit.floor.svgBluePrint;

    const outUrl = path.join(__dirname, '../../../', svgPath);

    await writeFile(outUrl, newSVG, 'utf-8');

    return unit;
  }

  async detachGroupUnit(unitId: string): Promise<boolean> {
    const unitGroup = await this.prisma.unit.findFirst({
      where: {
        id: unitId,
      },
      include: {
        bookings: true,
        floor: true,
        UnitGroup: {
          include: {
            Units: true,
          },
        },
      },
    });

    if (unitGroup.isGroup === false) {
      throw new Error('this unit is not a group');
    }
    if (unitGroup.bookings.length > 0) {
      throw new Error('Unit with bookings cannot be deleted');
    }

    const svgFilePath = `http://localhost:${process.env.PORT}${unitGroup.floor.svgBluePrint}`;

    const svgFileContent = await axios.get<string>(svgFilePath);

    const newSVG = await SVGManager.detachGroup(
      svgFileContent.data,
      unitGroup.unitId,
      unitGroup.UnitGroup.Units.map((unit) => unit.unitId),
    );

    const outUrl = path.join(
      __dirname,
      '../../../',
      unitGroup.floor.svgBluePrint,
    );

    await writeFile(outUrl, newSVG, 'utf-8');

    await this.prisma.unit.delete({
      where: {
        id: unitId,
      },
    });

    await this.prisma.unitGroup.delete({
      where: {
        id: unitGroup.unitGroupId,
      },
    });

    return true;
  }

  async getGroupUnits(unitId: string): Promise<Unit[]> {
    const unitGroup = await this.prisma.unit.findFirst({
      where: {
        id: unitId,
      },
      include: {
        UnitGroup: {
          include: {
            Units: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    if (unitGroup.isGroup === false) {
      throw new Error('this unit is not a group');
    }

    return unitGroup.UnitGroup.Units;
  }

  async getUnitUnavailableDates(id) {
    const unit = await this.prisma.unit.findUnique({
      where: {
        id: id,
      },
      include: {
        bookings: {
          where: {
            status: 3,
            dateTo: {
              gte: new Date(),
            },
          },
          select: {
            dateFrom: true,
            dateTo: true,
          },
        },
        UnitsForecasts: true,
      },
    });

    function mergeDateRanges(dateRanges) {
      const sorted = dateRanges.sort(
        (a, b) => a.dateFrom.getTime() - b.dateFrom.getTime(),
      );

      const ret = sorted.reduce((acc, curr) => {
        if (acc.length === 0) {
          return [curr];
        }

        const prev = acc.pop();

        if (curr.dateTo <= prev.dateTo) {
          return [...acc, prev];
        }
        if (curr.dateFrom <= prev.dateTo) {
          return [...acc, { dateFrom: prev.dateFrom, dateTo: curr.dateTo }];
        }

        return [...acc, prev, curr];
      }, []);

      return ret;
    }

    function findOverlappingPeriods(dateRanges, maxBookings = 10) {
      dateRanges.sort((a, b) => a.dateFrom - b.dateFrom);

      const overlappingPeriods = [];

      for (let i = 0; i < dateRanges.length; i++) {
        const currentRange = dateRanges[i];
        const overlapping = [currentRange];

        for (let j = i + 1; j < dateRanges.length; j++) {
          const nextRange = dateRanges[j];

          if (currentRange.dateTo >= nextRange.dateFrom) {
            overlapping.push(nextRange);
          } else {
            break;
          }
        }

        if (overlapping.length >= maxBookings) {
          const smallestPeriod = {
            dateFrom: new Date(
              Math.max(...overlapping.map((range) => range.dateFrom)),
            ),
            dateTo: new Date(
              Math.min(...overlapping.map((range) => range.dateTo)),
            ),
          };

          overlappingPeriods.push(smallestPeriod);
        }
      }

      return overlappingPeriods;
    }

    if (unit?.rentType === 3) {
      const mergedDates = findOverlappingPeriods(unit?.bookings);

      return mergedDates;
    } else {
      return unit?.bookings ?? [];
    }
  }

  async getAvailableUnitsByDate(data: InputUnitFloorAndDateSearch) {
    const floorId = data.floorId ? data.floorId : undefined;

    const unitsWithoutBooking = await this.prisma.unit.findMany({
      where: {
        OR: [
          {
            rentType: 3,
            floorId,
            bookings: {
              some: {
                status: 3,
                dateFrom: { lte: data.dateTo },
                dateTo: { gte: data.dateFrom },
              },
            },
          },
          {
            floorId,
            bookings: {
              none: {
                status: 3,
                dateFrom: { lte: data.dateTo },
                dateTo: { gte: data.dateFrom },
              },
            },
          },
        ],
      },
      include: {
        bookings: true,
      },
    });

    const filteredUnits = unitsWithoutBooking.filter((unit: Unit) => {
      if (unit.rentType === 3) {
        const bookings = unit.bookings.filter((booking) => {
          return (
            booking.status === 3 &&
            booking.dateFrom <= data.dateTo &&
            booking.dateTo >= data.dateFrom
          );
        });
        return bookings.length < 10;
      } else {
        return true;
      }
    });

    return filteredUnits;
  }

  // Unit Logo Metadata

  async createUnitLogoMetadata(
    data: CreateUnitLogoMetadataDto,
  ): Promise<UnitLogoMetadata> {
    const metadata = await this.prisma.unitLogoMetadata.create({
      data,
      include: {
        unit: true,
        floor: true,
      },
    });

    return metadata;
  }

  async updateUnitLogoMetadata({
    id,
    ...data
  }: UpdateUnitLogoMetadataDto): Promise<UnitLogoMetadata> {
    const metadata = await this.prisma.unitLogoMetadata.update({
      where: {
        id,
      },
      data,
      include: {
        unit: true,
        floor: true,
      },
    });

    return metadata;
  }

  async bulkUpdateUnitLogoMetadata(
    data: BulkUnitLogoMetadataDto,
  ): Promise<UnitLogoMetadata[]> {
    const toCreate = data.placeholders.filter((pl) => !pl.id);
    const toUpdate = data.placeholders.filter((pl) => !!pl.id);

    const metadata: UnitLogoMetadata[] = [];

    for (let index = 0; index < toCreate.length; index++) {
      const { id, ...payload } = toCreate[index];
      const created = await this.prisma.unitLogoMetadata.create({
        data: payload,
        include: {
          unit: true,
          floor: true,
        },
      });
      metadata.push(created);
    }
    for (let index = 0; index < toUpdate.length; index++) {
      const { id, ...data } = toUpdate[index];
      const updated = await this.prisma.unitLogoMetadata.update({
        where: {
          id,
        },
        data,
        include: {
          unit: true,
          floor: true,
        },
      });
      metadata.push(updated);
    }

    return metadata;
  }

  async getUnitsLogoMetadata({
    floorId,
    unitId,
  }: GetUnitsLogoMetadataDto): Promise<UnitLogoMetadata[]> {
    const metadata = await this.prisma.unitLogoMetadata.findMany({
      where: {
        unitId: unitId ?? undefined,
        floorId: floorId ?? undefined,
      },
      include: {
        unit: true,
        floor: true,
      },
    });

    return metadata;
  }

  async deleteUnitsLogoMetadata(id: string): Promise<boolean> {
    await this.prisma.unitLogoMetadata.delete({
      where: {
        id,
      },
    });

    return true;
  }
}
