import { PrismaClient } from '@prisma/client';
import { join } from 'path';
import readXlsxFile, {
  ParsedObjectsResult,
  readSheetNames,
} from 'read-excel-file/node';
import schemas from './schemas';
import { ManualBooking } from '../utils/ManualBooking';
import _ from 'lodash';
import { toUtc } from '../common/decorators/to-utc-date.decorator';

function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

class ImportData {
  private prisma: PrismaClient;
  private outputDir = join(__dirname, '../../.exported/');
  private data: Record<string, ParsedObjectsResult<object>> = {};
  constructor() {
    this.prisma = new PrismaClient();
  }

  async importFile(fileName: string) {
    console.log('🟧 Importing ' + fileName);

    const sheets = await readSheetNames(join(this.outputDir, fileName));
    for (const sheet of sheets) {
      console.log('🟧 Importing sheet: ' + sheet);
      const rows = await readXlsxFile(join(this.outputDir, fileName), {
        sheet,
        schema: schemas[sheet] ?? undefined,
      });
      this.data[sheet] = rows;
    }
  }
  private async _createAsset(asset) {
    const data = await this._getAssetPayload(asset);
    await this.prisma.retailCenter.create({
      data: {
        ...data,
        type: 1,
        specialty: 1,
        id: asset['ID'] ?? undefined,
      },
    });
  }

  private async _getAssetPayload(asset) {
    const legalRepresentative: string = asset['Asset Legal Representative'];
    const parts = legalRepresentative
      ? legalRepresentative?.split('-')
      : ['', '', ''];

    const pictures = asset['Images']?.split(';') ?? [];

    const picIds = [];
    for (const picture of pictures) {
      const existingPic = await this.prisma.picture.findFirst({
        where: {
          filePath: picture,
        },
      });

      if (existingPic) {
        picIds.push(existingPic.id);
      } else {
        const newPic = await this.prisma.picture.create({
          data: {
            filePath: picture,
          },
        });

        picIds.push(newPic.id);
      }
    }

    return {
      alias: asset['Alias'],
      name: asset['Asset Name'],
      openingYear: asset['Opening year'] ?? 0,
      address: asset['Address'] ?? '',
      city: asset['City'] ?? '',
      zip: asset['Zip Code'] ?? '',
      country: asset['Country'] ?? '',
      flagShip: asset['Flagship'] ?? '',
      description: asset['Description'] ?? '',
      parkingSpaces: asset['Parking slots No'],
      annualVisitors: asset['Visitors/Year'],
      ownerEntity: asset['Owner entity'] ?? '',
      headquarters: asset['Headquarter'] ?? '',
      addressCorrespondance: asset['Correspondance address'] ?? '',
      legalPersonRC: asset['RC'] ?? '',
      legalPersonCityRC: asset['RC City'] ?? '',
      patente: asset['TP'] ?? '',
      taxIF: asset['IF'] ?? '',
      capital: asset['Capital Social'] ?? '',
      ice: asset['ICE'] ?? '',
      bankName: asset['Bank'] ?? '',
      bankSWIFT: asset['SWIFT'] ?? '',
      bankIBAN: asset['IBAN'] ?? '',
      legalPersonPosition: asset['Position'] ?? '',
      logo: asset['Logo'] ?? '',
      picture: asset['Presentation'] ?? '',
      legalPersonTitle: parts[0] ?? '',
      legalPersonName: parts[1] ?? '',
      legalPersonFirstname: parts[2] ?? '',
      surface: asset['Surface'] ?? 0,
      pictures: {
        connect: picIds.map((id: string) => {
          return {
            id,
          };
        }),
      },
    };
  }
  async loadAsset() {
    console.log('🟧 Loading Assets...');

    const assets = this.data['Assets'].rows;
    for (const asset of assets) {
      if (asset['ID']) {
        // Update
        const existing = await this.prisma.retailCenter.findFirst({
          where: {
            id: asset['ID'],
            alias: asset['Alias'],
          },
        });

        if (!existing) {
          // Create
          await this._createAsset(asset);
        } else {
          await this.prisma.retailCenter.update({
            where: {
              id: asset['ID'],
            },
            data: this._getAssetPayload(asset),
          });
        }
      } else {
        // Create
        await this._createAsset(asset);
      }
    }

    console.log('🟩 Assets Loaded.');
  }

  private async _getFloorPayload(floor) {
    const svgBluePrint = `/uploads/plans/${camelize(
      floor['Asset Name'],
    )}/Plan_${camelize(floor['Asset Name'])}_${floor[
      'Floor Name'
    ].toUpperCase()}.svg`;

    let assetId = floor['Asset ID'];

    if (!assetId) {
      const asset = await this.prisma.retailCenter.findFirst({
        where: {
          name: floor['Asset Name'],
        },
      });

      assetId = asset.id;
    }
    return {
      id: floor['Floor ID'] ?? undefined,
      name: floor['Floor Name'],
      retailCenterId: assetId,
      order: floor['Floor Order'],
      svgBluePrint,
    };
  }
  private async _createFloor(floor) {
    const data = await this._getFloorPayload(floor);
    await this.prisma.floor.create({
      data,
    });
  }
  async loadFloors() {
    console.log('🟧 Loading Floors...');
    const floors = this.data['Floors'].rows;
    for (const floor of floors) {
      if (floor['Floor ID']) {
        const existing = await this.prisma.floor.findFirst({
          where: {
            name: floor['Floor Name'],
            retailCenterId: floor['Asset ID'],
          },
        });

        if (!existing) {
          // Create
          await this._createFloor(floor);
        } else {
          // Update
          const data = await this._getFloorPayload(floor);
          await this.prisma.floor.update({
            where: {
              id: existing.id,
            },
            data,
          });
        }
      } else {
        // Create
        await this._createFloor(floor);
      }
    }
    console.log('🟩 Floors Loaded.');
  }

  private async _getMix(mixName, subMixName) {
    const mix = await this.prisma.mix.findFirst({
      where: {
        alias: mixName,
      },
    });

    let mixId = 1;
    if (mix) {
      mixId = mix.id;
    } else {
      let mixCat = await this.prisma.mixCategory.findFirst({
        where: {
          alias: subMixName,
        },
      });
      if (!mixCat) {
        mixCat = await this.prisma.mixCategory.create({
          data: {
            alias: subMixName,
          },
        });
      }
      const mix = await this.prisma.mix.create({
        data: {
          alias: mixName,
          mixCategoryId: mixCat.id,
        },
      });

      mixId = mix.id;
    }

    return mixId;
  }

  private async _getUnitPayload(unit) {
    let floorId;
    if (unit['Floor ID']) {
      floorId = unit['Floor ID'];
    } else {
      const floor = await this.prisma.floor.findFirst({
        where: {
          retailCenterId: unit['Asset ID'],
          name: unit['Floor'],
        },
      });

      if (floor) {
        floorId = floor.id;
      }
    }

    if (!floorId) {
      throw new Error(
        "Floor doesn't exist: Unit: " +
          unit['Unit APP ID'] +
          ', ' +
          unit['Unit ID'],
      );
    }

    let rentType = 1;

    switch (unit['Type']) {
      case 'Long term':
        rentType = 1;
        break;
      case 'Specialty':
        rentType = 2;
        break;
      case 'Media':
        rentType = 3;
        break;
    }

    const services = unit['Services']?.split(';') ?? [];
    const featureIds: number[] = [];
    const features = await this.prisma.feature.findMany({
      where: {
        alias: {
          in: services,
        },
      },
    });

    featureIds.push(...features.map((f) => f.id));

    if (features.length !== services.length) {
      const newFeatures = services.filter(
        (f) => !features.map((ft) => ft.alias).includes(f),
      );

      for (const feature of newFeatures) {
        const ft = await this.prisma.feature.create({
          data: {
            alias: feature,
          },
        });

        featureIds.push(ft.id);
      }
    }

    const specialties = unit['Specialties']?.split(';') ?? [];
    const specialtiesIds: number[] = [];
    const specialities = await this.prisma.speciality.findMany({
      where: {
        alias: {
          in: specialties,
        },
      },
    });

    specialtiesIds.push(...specialities.map((f) => f.id));

    if (specialities.length !== specialties.length) {
      const newSpecialties = specialties.filter(
        (s) => !specialties.map((sp) => sp.alias).includes(s),
      );

      for (const specialty of newSpecialties) {
        const sp = await this.prisma.speciality.create({
          data: {
            alias: specialty,
          },
        });

        specialtiesIds.push(sp.id);
      }
    }

    const pictures = unit['Photos files']?.split(';') ?? [];

    const picIds: string[] = [];
    const pics = await this.prisma.picture.findMany({
      where: {
        filePath: {
          in: pictures,
        },
      },
    });

    picIds.push(...pics.map((p) => p.id));

    if (pictures.length !== pics.length) {
      const newPictures = pictures.filter(
        (p) => !pictures.map((pic) => pic.filePath).includes(p),
      );

      for (const picture of newPictures) {
        const pic = await this.prisma.picture.create({
          data: {
            filePath: picture,
          },
        });

        picIds.push(pic.id);
      }
    }

    const mixId = await this._getMix(unit['Mix'], unit['Sub mix']);
    return {
      floor: {
        connect: {
          id: floorId,
        },
      },
      mix: {
        connect: {
          id: mixId,
        },
      },
      features: {
        connect: featureIds.map((id) => {
          return {
            id,
          };
        }),
      },
      specialities: {
        connect: specialtiesIds.map((id) => {
          return {
            id,
          };
        }),
      },
      pictures: {
        connect: picIds.map((id) => {
          return {
            id,
          };
        }),
      },
      unitId: unit['Unit ID'],
      qty: unit['Quantity'] ?? 1,
      alias: unit['Unit Alias'] ?? '',
      rentType,
      surface: unit['GLA'] ?? 0,
      facadeLength: unit['Facade'] ?? 0,
      width: unit['Width'] ?? 0,
      mezzanine: unit['Mezzanine'] ?? 0,
      terrasse: unit['Terrasse'] ?? 0,
      storage: unit['Storage'] ?? 0,
      depth: unit['Depth'] ?? 0,
      maxHeight: unit['Max Height'] ?? 0,
      monthPrice: unit['Price/HT'] ?? 0,
      description: unit['Description'] ?? '-',
      mainPicture: unit['Banner file']
        ? `/uploads/unit/${unit['Banner file']}`
        : 'default',
      videoUrl: unit['Video URL'] ?? null,
      virtualVisitUrl: unit['Virtual visit URL'] ?? null,
    };
  }
  private async _createUnit(unit) {
    const categoryCount = await this.prisma.category.count();

    if (categoryCount === 0) {
      await this.prisma.category.createMany({
        data: [
          {
            id: 1,
            name: 'Habillage',
          },
          {
            id: 2,
            name: 'Ecran',
          },
          {
            id: 3,
            name: 'Autre',
          },
        ],
      });
    }

    const data = await this._getUnitPayload(unit);
    await this.prisma.unit.create({
      data: {
        ...data,
        status: 1,
      },
    });
  }

  async loadUnits() {
    console.log('🟧 Loading Units...');
    const units = this.data['Units'].rows;

    for (const unit of units) {
      if (unit['Unit APP ID']) {
        const existing = await this.prisma.unit.findUnique({
          where: {
            id: unit['Unit APP ID'],
          },
        });

        if (existing) {
          // Update
          const data = await this._getUnitPayload(unit);
          await this.prisma.unit.update({
            where: {
              id: existing.id,
            },
            data,
          });
        } else {
          // Create
          await this._createUnit(unit);
        }
      } else {
        const existing = await this.prisma.unit.findFirst({
          where: {
            unitId: unit['Unit ID'],
            floor: {
              retailCenterId: unit['Asset ID'],
            },
          },
        });
        if (existing) {
          // Update
          const data = await this._getUnitPayload(unit);
          await this.prisma.unit.update({
            where: {
              id: existing.id,
            },
            data,
          });
        } else {
          // Create
          await this._createUnit(unit);
        }
      }
    }
    console.log('🟩 Units Loaded.');
  }

  private async _getCompanyPayload(brand) {
    let groupId;
    if (brand['Group']) {
      const group = await this.prisma.companyGroup.findFirst({
        where: {
          name: brand['Group'],
        },
      });

      if (group) {
        groupId = group.id;
      } else {
        const newGroup = await this.prisma.companyGroup.create({
          data: {
            name: brand['Group'],
          },
        });

        groupId = newGroup.id;
      }
    }

    const legalRepresentative = brand['Legal Representative'];
    const parts = legalRepresentative?.split('-') ?? ['', ''];

    const payload: any = {
      id: brand['Company ID'],
      customerCode: brand['Customer Code'],
      name: brand['Company Name'],
      type: brand['Type'],
      description: brand['Description'],
      address: brand['Address'],
      country: brand['Country'],
      city: brand['City'],
      zip: brand['Zip Code'],
      email: brand['Email'] ?? '',
      phone: brand['Phone'] ?? '',
      rc: brand['RC'],
      cityRC: brand['RC City'],
      patente: brand['TP'],
      taxIF: brand['IF'],
      capital: brand['Capital Social'],
      ice: brand['ICE'],
      managerTitle: parts[0],
      managerName: parts[1],
      managerPosition: brand['Position'],
      creator: {
        connect: {
          id: '000000000000',
        },
      },
    };

    if (groupId) {
      payload.companyGroup = {
        connect: {
          id: groupId,
        },
      };
    }

    return payload;
  }
  private async _createCompany(brand) {
    const data = await this._getCompanyPayload(brand);
    const company = await this.prisma.company.create({
      data,
    });
    return company;
  }

  private async _getBrandPayload(brand) {
    let companyId;
    if (brand['Company ID']) {
      const company = await this.prisma.company.findUnique({
        where: {
          id: brand['Company ID'],
        },
      });

      if (company) {
        companyId = company.id;
        // Update Company
        const data = await this._getCompanyPayload(brand);
        await this.prisma.company.update({
          where: {
            id: company.id,
          },
          data,
        });
      } else {
        // Create Company
        const newCompany = await this._createCompany(brand);
        companyId = newCompany.id;
      }
    }

    if (!brand['Brand Name']) return;
    const mixId = await this._getMix(brand['Mix'], brand['Sub-mix']);

    const payload: any = {
      id: brand['Brand ID'] ?? undefined,
      name: brand['Brand Name'],
      logo: brand['Logo'] ?? '',
      description: brand['Brand description'] ?? '',
      products: brand['Brand products'] ?? '',
      mix: {
        connect: {
          id: mixId,
        },
      },
    };

    if (companyId) {
      payload.companies = {
        connect: {
          id: companyId,
        },
      };
    }

    return payload;
  }
  private async _createBrand(brand) {
    const data = await this._getBrandPayload(brand);
    if (brand['Brand Name']) {
      await this.prisma.brand.create({
        data,
      });
    }
  }
  async loadCompanies() {
    console.log('🟧 Loading Leads...');
    const brands = this.data['Companies'].rows;

    for (const brand of brands) {
      if (brand['Brand ID']) {
        const existing = await this.prisma.brand.findFirst({
          where: {
            id: brand['Brand ID'],
            name: brand['Brand Name'],
          },
        });

        if (existing) {
          // Update
          const data = await this._getBrandPayload(brand);
          await this.prisma.brand.update({
            where: {
              id: existing.id,
            },
            data,
          });
        } else {
          // Create
          await this._createBrand(brand);
        }
      } else {
        // Create
        await this._createBrand(brand);
      }
    }
    console.log('🟩 Leads Loaded.');
  }

  private _getContactPayload(brand) {
    const payload: any = {
      id: brand['Contact ID'] ?? undefined,
      title: brand['Title'] ?? '',
      firstname: brand['First Name'] ?? '',
      name: brand['Last Name'] ?? '',
      position: brand['Position'],
      email: brand['Email'],
      mobile: brand['Mobile'],
      phone: brand['Phone'],
      creator: {
        connect: {
          id: '000000000000',
        },
      },
    };

    if (brand['Brand ID']) {
      payload.brands = {
        connect: {
          id: brand['Brand ID'],
        },
      };
    }
    return payload;
  }
  private async _createContact(brand) {
    await this.prisma.contact.create({
      data: this._getContactPayload(brand),
    });
  }

  async loadContacts() {
    console.log('🟧 Loading Contacts...');
    const brands = this.data['Contacts'].rows;

    const groupedItems = _.groupBy(brands, 'Contact ID');

    for (const contactId of Object.keys(groupedItems)) {
      const contact = groupedItems[contactId][0];

      if (contact['Contact ID']) {
        const existingContact = await this.prisma.contact.findFirst({
          where: {
            id: contact['Contact ID'],
          },
        });

        if (existingContact) {
          // Update
          const data = await this._getContactPayload(contact);
          await this.prisma.contact.update({
            where: {
              id: contact['Contact ID'],
            },
            data: {
              ...data,
              brands: {
                connect: groupedItems[contactId].map((brand) => {
                  return {
                    id: brand['Brand ID'],
                  };
                }),
              },
            },
          });
        } else {
          // Create
          this._createContact(contact);
        }
      } else {
        // Create
        this._createContact(contact);
      }
    }

    console.log('🟩 Contacts Loaded.');
  }
  async loadLeases() {
    console.log('🟧 Loading Leasings...');
    const leases = this.data['Leases'].rows;

    const groupedItems = _.groupBy(leases, 'ID');

    for (const bookingId of Object.keys(groupedItems)) {
      const bookings = groupedItems[bookingId];

      const units: {
        id: string;
        unitId: string;
        surface: number;
        price: number;
      }[] = [];
      const lease = bookings[0];

      for (const booking of bookings) {
        const unit = await this.prisma.unit.findFirst({
          where: {
            unitId: booking['Unit'],
            floor: {
              retailCenterId: booking['Asset ID'],
            },
          },
        });
        if (!unit) {
          throw new Error("Unit doesn't exist");
        }
        units.push({
          id: unit.id,
          unitId: unit.unitId,
          surface: lease['GLA'],
          price: lease['Price/HT'] ?? 0,
        });
      }

      const manualBooking = new ManualBooking(this.prisma, {
        brandId: lease['Brand ID'],
        companyId: lease['Company ID'],
        contactId: lease['Contact ID'],
        unit: units,
        dateFrom: toUtc(new Date(lease['From'])),
        dateTo: toUtc(new Date(lease['To'])),
        type: lease['Type'],
        creatorId: '000000000000',
      });

      await manualBooking.createBooking();
    }
    console.log('🟩 Leasings Loaded.');
  }

  private async _getUserPayload(user) {
    let roleId;
    if (user['Role']) {
      const role = await this.prisma.userRole.findFirst({
        where: {
          name: user['Role'],
        },
      });

      if (role) {
        roleId = role.id;
      } else {
        const newRole = await this.prisma.userRole.create({
          data: {
            name: user['Role'],
          },
        });

        roleId = newRole.id;
      }
    }

    return {
      id: user['ID'],
      firstName: user['First Name'],
      name: user['Last Name'],
      mobilePhone: user['Mobile Phone'],
      phone: user['Phone'],
      email: user['Email'],
      jobTitle: user['Function'],
      picture: user['Photo'],
      role: {
        connect: {
          id: roleId,
        },
      },
    };
  }
  private async _createUser(user) {
    const data = await this._getUserPayload(user);

    await this.prisma.userProfile.create({
      data,
    });
  }
  async loadTeam() {
    console.log('🟧 Loading ...');
    const teams = this.data['Teams'].rows;

    if (teams.find((user) => user['ID'] === '000000000000') === undefined) {
      await this._createUser({
        ID: '000000000000',
        'First Name': 'Mehdi',
        'Last Name': 'Jai',
        'Mobile Phone': '+212623468590',
        Phone: '+212623468590',
        Email: 'mjai@squarefeet.cloud',
        Function: 'Dev Lead',
        Role: 'ADMIN_SQFT',
        Photo: '',
      });
    }

    for (const user of teams) {
      if (user['ID']) {
        const existing = await this.prisma.userProfile.findUnique({
          where: {
            id: user['ID'],
          },
        });

        if (existing) {
          // Update
          const data = await this._getUserPayload(user);

          await this.prisma.userProfile.update({
            where: {
              id: user['ID'],
            },
            data,
          });
        } else {
          // Create
          await this._createUser(user);
        }
      } else {
        // Create
        await this._createUser(user);
      }
    }

    console.log('🟩 Teams Loaded.');
  }
}

const instance = new ImportData();
(async () => {
  await instance.importFile('marjane.xlsx');
  await instance.loadAsset();
  await instance.loadFloors();
  await instance.loadUnits();
  await instance.loadTeam();
  await instance.loadCompanies();
  await instance.loadContacts();
  // await instance.loadLeases();
})();
