import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Forecast } from './entities/forecast';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { addUnitsToForecastDto } from './dto/add-units-to-forecast.dto';
import { deleteSelectedUnitsForecastsDto } from './dto/delete-selected-units-forecasts.dto';
import { UserPayload } from '../auth/interface/user-payload';
import { MonthlyForecasts } from './entities/monthly.forecasts';
import { AppError } from '../common/error/app-error';
import {
  ERR_FORCASTS_NOT_CREATED,
  ERR_FORCASTS_NOT_FOUND,
  ERR_FORCASTS_NOT_UPDATED,
} from '../common/error/error-code';
import { UnitsForecasts } from '@prisma/client';

@Injectable()
export class ForcastsService {
  constructor(private prisma: PrismaService) {}

  async getForecasts(user): Promise<Forecast[]> {
    try {
      return await this.prisma.forecast.findMany({
        include: {
          monthlyForecasts: {
            include: {
              retailCenter: {
                include: {
                  UserProfile: true,
                },
              },
            },
          },
          longtermForecasts: {
            include: {
              retailCenter: {
                include: {
                  UserProfile: true,
                  floors: {
                    include: {
                      units: {
                        include: {
                          bookings: {
                            include: {
                              brand: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              unitsForecasts: {
                include: {
                  unit: {
                    include: {
                      bookings: {
                        include: {
                          brand: true,
                          documents: true,
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
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_FORCASTS_NOT_FOUND),
      );
    }
  }

  async updateForecast(
    data: UpdateForecastDto,
    user: UserPayload,
  ): Promise<Forecast> {
    try {
      const { id, name, monthlyForecasts, longtermForecasts } = data;
      const updatedForecast = await this.prisma.forecast.update({
        where: { id },
        data: {
          name,
        },
      });
      if (monthlyForecasts) {
        await Promise.all(
          monthlyForecasts.map((monthlyForecast) => {
            return this.prisma.monthlyForecasts.update({
              where: { id: monthlyForecast.id },
              data: {
                january: monthlyForecast.january,
                february: monthlyForecast.february,
                march: monthlyForecast.march,
                april: monthlyForecast.april,
                may: monthlyForecast.may,
                june: monthlyForecast.june,
                july: monthlyForecast.july,
                august: monthlyForecast.august,
                september: monthlyForecast.september,
                october: monthlyForecast.october,
                november: monthlyForecast.november,
                december: monthlyForecast.december,
              },
            });
          }),
        );
      }

      if (longtermForecasts) {
        await Promise.all(
          longtermForecasts.map(async (longtermForecast) => {
            await this.prisma.longtermForecasts.update({
              where: {
                id: longtermForecast.id,
              },
              data: {
                retailCenterStatus: longtermForecast.retailCenterStatus,
              },
            });

            if (longtermForecast.unitsForecasts) {
              await Promise.all(
                longtermForecast.unitsForecasts.map((unitForecast) =>
                  this.prisma.unitsForecasts.update({
                    where: { id: unitForecast.id },
                    data: {
                      glaForecast: unitForecast.glaForecast,
                      terrasseForecast: unitForecast.terrasseForecast,
                      mezzanineForecast: unitForecast.mezzanineForecast,
                      monthlyRentFirstYear: unitForecast.monthlyRentFirstYear,
                      monthlyRentSecondYear: unitForecast.monthlyRentSecondYear,
                      monthlyRentThirdYear: unitForecast.monthlyRentThirdYear,
                      yearlyRentFirstYear: unitForecast.yearlyRentFirstYear,
                      yearlyRentSecondYear: unitForecast.yearlyRentSecondYear,
                      yearlyRentThirdYear: unitForecast.yearlyRentThirdYear,
                      chargesM2Fonctionnement:
                        unitForecast.chargesM2Fonctionnement,
                      chargesM2Marketing: unitForecast.chargesM2Marketing,
                      chargesM2ChargesCommunes:
                        unitForecast.chargesM2ChargesCommunes,
                      chargesFonctionnement: unitForecast.chargesFonctionnement,
                      chargesMarketing: unitForecast.chargesMarketing,
                      chargesChargesCommunes:
                        unitForecast.chargesChargesCommunes,
                      franchiseFirstYear: unitForecast.franchiseFirstYear,
                      franchiseSecondYear: unitForecast.franchiseSecondYear,
                      franchiseThirdYear: unitForecast.franchiseThirdYear,
                      legalisation: unitForecast.legalisation,
                      signature: unitForecast.signature,
                      livraison: unitForecast.livraison,
                      travaux: unitForecast.travaux,
                      loyer: unitForecast.loyer,
                      fraisRTM: unitForecast.fraisRTM,
                      marketingOuverture: unitForecast.marketingOuverture,
                      slMedia: unitForecast.slMedia,
                    },
                  }),
                ),
              );
            }
          }),
        );
      }
      return updatedForecast;
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_FORCASTS_NOT_UPDATED),
      );
    }
  }

  async deleteSelectedUnitsForecasts(
    data: deleteSelectedUnitsForecastsDto,
    user: UserPayload,
  ): Promise<boolean> {
    const { id, name, filtredAssets, filtredUnits } = data;
    await this.prisma.forecast.findUnique({
      where: {
        id,
      },
      include: {
        longtermForecasts: {
          include: {
            unitsForecasts: true,
          },
        },
      },
    });
    if (filtredAssets) {
      for (const assetId of filtredAssets) {
        const asset = await this.prisma.retailCenter.findUnique({
          where: {
            id: assetId,
          },
        });
        const existingLongtemforecast =
          await this.prisma.longtermForecasts.findFirst({
            where: {
              Forecast: {
                id,
                name,
              },
              retailCenterId: asset.id,
            },
            include: {
              unitsForecasts: true,
            },
          });
        if (existingLongtemforecast) {
          await this.prisma.longtermForecasts.update({
            where: {
              id: existingLongtemforecast.id,
            },
            data: {
              Forecast: {
                disconnect: true,
              },
            },
            include: {
              unitsForecasts: true,
            },
          });
        }
      }
    }
    if (filtredUnits) {
      for (const unitId of filtredUnits) {
        const unit = await this.prisma.unit.findUnique({
          where: {
            id: unitId,
          },
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        });
        const longtemforecast = await this.prisma.longtermForecasts.findFirst({
          where: {
            Forecast: {
              id,
              name,
            },
            retailCenterId: unit.floor.retailCenter.id,
          },
          include: {
            unitsForecasts: true,
          },
        });
        const existingUnitforecast = await this.prisma.unitsForecasts.findFirst(
          {
            where: {
              longtermForecastsId: longtemforecast?.id,
              unitId: unit.id,
            },
          },
        );
        if (existingUnitforecast) {
          await this.prisma.unitsForecasts.update({
            where: {
              id: existingUnitforecast.id,
            },
            data: {
              LongtermForecasts: {
                disconnect: true,
              },
            },
          });
        }
      }
    }
    return true;
  }

  async addUnitsToForecast(
    data: addUnitsToForecastDto,
    user: UserPayload,
  ): Promise<boolean> {
    const { id, name, addedUnits } = data;
    const forecast = await this.prisma.forecast.findUnique({
      where: {
        id,
      },
      include: {
        longtermForecasts: {
          include: {
            unitsForecasts: true,
          },
        },
      },
    });
    for (const unitId of addedUnits) {
      const unit = await this.prisma.unit.findUnique({
        where: {
          id: unitId,
        },
        include: {
          floor: {
            include: {
              retailCenter: true,
            },
          },
        },
      });

      if (unit.rentType === 1) {
        let longtemforecast;

        const existingLongtemforecast =
          await this.prisma.longtermForecasts.findFirst({
            where: {
              Forecast: {
                id,
                name,
              },
              retailCenterId: unit.floor.retailCenterId,
            },
            include: {
              unitsForecasts: true,
            },
          });

        if (!existingLongtemforecast) {
          longtemforecast = await this.prisma.longtermForecasts.create({
            data: {
              Forecast: {
                connect: {
                  id: forecast.id,
                },
              },
              retailCenter: {
                connect: {
                  id: unit.floor.retailCenterId,
                },
              },
              retailCenterStatus: 'OPS',
            },
            include: {
              unitsForecasts: true,
            },
          });
        } else {
          longtemforecast = existingLongtemforecast;
        }

        const unitForecastExists = longtemforecast.unitsForecasts?.some(
          (unitForecast: UnitsForecasts) => unitForecast.unitId === unitId,
        );
        if (!unitForecastExists) {
          await this.prisma.unitsForecasts.create({
            data: {
              LongtermForecasts: {
                connect: {
                  id: longtemforecast.id,
                },
              },
              unit: {
                connect: {
                  id: unitId,
                },
              },
              glaForecast: unit?.surface ? unit?.surface.toString() : '0',
              terrasseForecast: unit?.terrasse
                ? unit?.terrasse.toString()
                : '0',
              mezzanineForecast: unit?.mezzanine
                ? unit?.mezzanine.toString()
                : '0',
              monthlyRentFirstYear: '0',
              monthlyRentSecondYear: '0',
              monthlyRentThirdYear: '0',
              yearlyRentFirstYear: '0',
              yearlyRentSecondYear: '0',
              yearlyRentThirdYear: '0',
              chargesM2Fonctionnement: '0',
              chargesM2Marketing: '0',
              chargesM2ChargesCommunes: '0',
              chargesFonctionnement: '0',
              chargesMarketing: '0',
              chargesChargesCommunes: '0',
              franchiseFirstYear: '0',
              franchiseSecondYear: '0',
              franchiseThirdYear: '0',
              legalisation: '0',
              signature: '0',
              livraison: '0',
              travaux: '0',
              loyer: '0',
              fraisRTM: '0',
              marketingOuverture: '0',
              slMedia: '0',
            },
          });
        }
      }
    }
    return true;
  }

  async createForecast(
    data: CreateForecastDto,
    user: UserPayload,
  ): Promise<Forecast> {
    const { name, type, year } = data;
    try {
      const retailCenters = await this.prisma.retailCenter.findMany({});
      const createdMonthlyForecasts: MonthlyForecasts[] = [];
      const monthlyForecastsPromises = retailCenters.map((retailCenter) => {
        return this.prisma.monthlyForecasts.create({
          data: {
            retailCenter: {
              connect: {
                id: retailCenter.id,
              },
            },
            january: '0',
            february: '0',
            march: '0',
            april: '0',
            may: '0',
            june: '0',
            july: '0',
            august: '0',
            september: '0',
            october: '0',
            november: '0',
            december: '0',
          },
        });
      });
      const monthlyForecasts = await Promise.all(monthlyForecastsPromises);
      createdMonthlyForecasts.push(...monthlyForecasts);
      return await this.prisma.forecast.create({
        data: {
          name,
          type,
          year,
          monthlyForecasts: {
            connect: createdMonthlyForecasts.map((monthlyForecast) => ({
              id: monthlyForecast.id,
            })),
          },
        },
        include: {
          monthlyForecasts: {
            include: {
              retailCenter: true,
            },
          },
        },
      });
    } catch (e) {
      throw new InternalServerErrorException(
        new AppError(ERR_FORCASTS_NOT_CREATED, e),
      );
    }
  }

  async deleteForecast(id: number, user: UserPayload): Promise<boolean> {
    try {
      const forecast = await this.prisma.forecast.delete({
        where: {
          id,
        },
      });

      return true;
    } catch (error) {
      console.error('Error deleting forecast:', error);
      return false;
    }
  }

  async createLontermForecast(
    data: CreateForecastDto,
    user: UserPayload,
  ): Promise<Forecast> {
    const { name, type, year } = data;
    /*  const retailCenters = await this.prisma.retailCenter.findMany({});
           const createdLongtermForecasts = [];

           for (const retailCenter of retailCenters) {
               /!*const units = await this.prisma.unit.findMany({
                   where: {
                       floor: {
                           retailCenter: {
                               id: retailCenter.id,
                           }
                       },

                       rentType: 1,
                   }
               });

               const createdUnitsForecasts = [];
               for (const unit of units) {
                   const unitsForecasts = await this.prisma.unitsForecasts.create(
                       {
                           data: {
                               unit: {
                                   connect: {
                                       id: unit.id,
                                   }
                               },
                               glaForecast: '0',
                               terrasseForecast: '0',
                               mezzanineForecast: '0',
                               monthlyRentFirstYear: '0',
                               monthlyRentSecondYear: '0',
                               monthlyRentThirdYear: '0',
                               yearlyRentFirstYear: '0',
                               yearlyRentSecondYear: '0',
                               yearlyRentThirdYear: '0',
                               chargesM2Fonctionnement: '0',
                               chargesM2Marketing: '0',
                               chargesM2ChargesCommunes: '0',
                               chargesFonctionnement: '0',
                               chargesMarketing: '0',
                               chargesChargesCommunes: '0',
                               franchiseFirstYear: '0',
                               franchiseSecondYear: '0',
                               franchiseThirdYear: '0',
                               legalisation: '0',
                               signature: '0',
                               livraison: '0',
                               travaux: '0',
                               loyer: '0',

                           }

                       })
                   createdUnitsForecasts.push(unitsForecasts);
               }*!/
               const longtermForecasts = await this.prisma.longtermForecasts.create({
                   data: {
                       retailCenter: {
                           connect: {
                               id: retailCenter.id
                           }
                       },
                       retailCenterStatus: 'OPS',
                       /!* unitsForecasts: {
                            connect: createdUnitsForecasts.map(unitForecast => ({id: unitForecast.id}))

                        }*!/


                   }


               });
               createdLongtermForecasts.push(longtermForecasts);


           }
   */

    const forcast = await this.prisma.forecast.create({
      data: {
        name,
        type,
        year,
        /* longtermForecasts: {
                     connect: createdLongtermForecasts.map(longtermForecasts => ({id: longtermForecasts.id}))
                 },*/
      },
      include: {
        longtermForecasts: {
          include: {
            retailCenter: true,
            unitsForecasts: {
              include: {
                unit: true,
              },
            },
          },
        },
      },
    });

    return forcast;
  }
}
