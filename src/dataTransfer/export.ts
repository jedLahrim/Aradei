import { PrismaClient } from '@prisma/client';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { Parser } from 'json2csv';
import moment from 'moment';
import { join } from 'path';
import XLSX from 'xlsx';
import { toUtc } from '../common/decorators/to-utc-date.decorator';

class ExportData {
  private prisma: PrismaClient;
  private outputDir = join(__dirname, '../../.exported/');
  private workBook: XLSX.WorkBook;
  private schemas: Record<string, Record<string, { prop: string; type: any }>> =
    {};
  constructor(private toXLSX = false) {
    this.prisma = new PrismaClient();
    this.workBook = XLSX.utils.book_new();

    if (!existsSync(this.outputDir)) {
      mkdir(this.outputDir);
    }
  }

  async exportAll() {
    await this.exportAssets();
    await this.exportFloors();
    await this.exportUnits();
    await this.exportCompanies();
    await this.exportContacts();
    await this.exportLeases();
    await this.exportTeam();
    // writeFile(
    //   join(this.outputDir, 'schemas.json'),
    //   JSON.stringify(this.schemas, null, 2),
    // );
    this.saveXLSX();
  }

  private exportXLSX(jsonData: Array<any>, sheetName: string) {
    const workSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(this.workBook, workSheet, sheetName);
  }

  private exportCSV(jsonData: Array<any>, fileName: string) {
    const parser = new Parser();
    const csv = parser.parse(jsonData);

    writeFile(join(this.outputDir, fileName.toLowerCase() + '.csv'), csv).then(
      () => {
        console.log(fileName + ' Exported');
      },
    );
  }

  private save(jsonData: Array<any>, sheetName: string) {
    if (this.toXLSX) {
      this.exportXLSX(jsonData, sheetName);
    } else {
      this.exportCSV(jsonData, sheetName);
    }
  }

  saveXLSX() {
    console.log('Saving XLSX...');
    XLSX.writeFile(this.workBook, join(this.outputDir, 'aradei.xlsx'));
    console.log('XLSX Exported');
  }

  private addSchema(data: object, name: string) {
    const keys = Object.keys(data);
    for (const key of keys) {
      if (!this.schemas[name]) {
        this.schemas[name] = {};
      }
      this.schemas[name][key] = {
        prop: key,
        type: 'String',
      };
    }
  }

  async exportAssets() {
    console.log('Exporting Assets...');

    const assets = await this.prisma.retailCenter.findMany({
      include: {
        pictures: true,
      },
    });

    const readyToParse = assets.map((asset) => {
      const data = {
        ID: asset.id,
        Alias: asset.alias,
        'Asset Name': asset.name,
        'Opening year': asset.openingYear,
        Address: asset.address,
        City: asset.city,
        'Zip Code': asset.zip,
        Country: asset.country,
        Flagship: asset.flagShip,
        Description: asset.description,
        'Parking slots No': asset.parkingSpaces,
        'Visitors/Year': asset.annualVisitors,
        'Owner entity': asset.ownerEntity,
        Headquarter: asset.headquarters,
        'Correspondance address': asset.addressCorrespondance,
        RC: asset.legalPersonRC,
        'RC City': asset.legalPersonCityRC,
        TP: asset.patente,
        IF: asset.taxIF,
        'Capital Social': asset.capital,
        ICE: asset.ice,
        Bank: asset.bankName,
        SWIFT: asset.bankSWIFT,
        IBAN: asset.bankIBAN,
        'Asset Legal Representative':
          asset.legalPersonTitle +
          '-' +
          asset.legalPersonName +
          '-' +
          asset.legalPersonFirstname,
        Position: asset.legalPersonPosition,
        Logo: asset.logo,
        Images: (asset.pictures?.map((pic) => pic.filePath) ?? []).join(';'),
        Presentation: asset.picture,
        Surface: asset.surface,
      };

      this.addSchema(data, 'Assets');

      return data;
    });

    this.save(readyToParse, 'Assets');
  }

  async exportFloors() {
    console.log('Exporting Floors...');

    const floors = await this.prisma.floor.findMany({
      include: {
        retailCenter: {
          include: {
            floors: true,
          },
        },
      },
    });

    const readyToParse = floors.map((floor) => {
      const floorOrder = floor.retailCenter.floors.findIndex(
        (fl) => fl.id === floor.id,
      );
      const data = {
        'Floor ID': floor.id,
        'Floor Name': floor.name,
        'Asset ID': floor.retailCenter.id,
        'Asset Name': floor.retailCenter.name,
        'Floor Order': floorOrder,
      };
      this.addSchema(data, 'Floors');
      return data;
    });

    this.save(readyToParse, 'Floors');
  }

  async exportUnits() {
    console.log('Exporting Units...');

    const units = await this.prisma.unit.findMany({
      include: {
        specialities: true,
        pictures: true,
        features: true,
        mix: {
          include: {
            MixCategory: true,
          },
        },
        floor: {
          include: {
            retailCenter: true,
          },
        },
      },
    });

    const readyToParse = units.map((unit) => {
      const dependencies: string[] = [];
      if (unit.dependency) {
        if (unit.terrasse) {
          dependencies.push('terrase');
        }
        if (unit.mezzanine) {
          dependencies.push('mezzanine');
        }
        if (unit.storage) {
          dependencies.push('storage');
        }
      }

      const unitType = (() => {
        switch (unit.rentType) {
          case 1:
            return 'Long term';
          case 2:
            return 'Specialty';
          case 3:
            return 'Media';
        }
      })();
      const data = {
        Asset: unit.floor.retailCenter.name,
        'Asset ID': unit.floor.retailCenter.id,
        Floor: unit.floor.name,
        'Floor ID': unit.floor.id,
        'Unit APP ID': unit.id,
        'Unit ID': unit.unitId,
        'Unit Alias': unit.alias,
        Type: unitType,
        Mix: unit.mix?.alias ?? '',
        'Sub mix': unit.mix?.MixCategory.alias ?? '',
        GLA: unit.surface,
        Facade: unit.facadeLength,
        Width: unit.width,
        Depth: unit.depth,
        'Max Height': unit.maxHeight,
        'Price/HT': unit.monthPrice,
        Description: unit.description,
        Mezzanine: unit.mezzanine,
        Terrasse: unit.terrasse,
        Storage: unit.storage,
        Dependencies: dependencies.join(';'),
        Services: unit.features.map((f) => f.alias).join(';'),
        Specialties: unit.specialities.map((sp) => sp.alias).join(';'),
        'Photos files': unit.pictures.map((pic) => pic.filePath).join(';'),
        'Banner file': unit.bgBanner,
        'Video URL': unit.videoUrl,
        'Virtual visit URL': unit.virtualVisitUrl,
      };

      this.addSchema(data, 'Units');
      return data;
    });
    this.save(readyToParse, 'Units');
  }

  async exportCompanies() {
    console.log('Exporting Companies...');

    const brands = await this.prisma.brand.findMany({
      include: {
        mix: {
          include: {
            MixCategory: true,
          },
        },
        companies: {
          include: {
            companyGroup: true,
          },
        },
      },
    });

    const readyToParse = brands.flatMap((brand) => {
      if (brand.companies.length === 0) {
        const data = {
          'Company ID': '',
          'Brand ID': brand.id,
          'Brand Name': brand.name,
          Mix: brand.mix?.alias ?? '',
          'Sub-mix': brand.mix?.MixCategory.alias ?? '',
          'Brand description': brand.description,
          'Brand products': brand.products,
          Description: '',
          Logo: brand.logo,
          Group: '',
          'Customer Code': '',
          'Company Name': '',
          Type: 0,
          Address: '',
          Country: '',
          State: '',
          City: '',
          'Zip Code': '',
          Email: '',
          Phone: '',
          RC: '',
          'RC City': '',
          TP: '',
          IF: '',
          'Capital Social': '',
          ICE: '',
          'Legal Representative': '' + '-' + '',
          Position: '',
        };

        return data;
      }
      return brand.companies.map((company) => {
        const data = {
          'Company ID': company.id,
          'Brand ID': brand.id,
          'Brand Name': brand.name,
          Mix: brand.mix?.alias ?? '',
          'Sub-mix': brand.mix?.MixCategory.alias ?? '',
          'Brand description': brand.description,
          'Brand products': brand.products,
          Description: company.description,
          Logo: brand.logo,
          Group: company.companyGroup?.name ?? '',
          'Customer Code': company.customerCode,
          'Company Name': company.name,
          Type: company.type,
          Address: company.address,
          Country: company.country,
          State: '',
          City: company.city,
          'Zip Code': company.zip,
          Email: company.email,
          Phone: company.phone,
          RC: company.rc,
          'RC City': company.cityRC,
          TP: company.patente,
          IF: company.taxIF,
          'Capital Social': company.capital,
          ICE: company.ice,
          'Legal Representative':
            company.managerTitle + '-' + company.managerName,
          Position: company.managerPosition,
        };

        this.addSchema(data, 'Companies');
        return data;
      });
    });

    const singleCompanies = await this.prisma.company.findMany({
      where: {
        brands: {
          none: {},
        },
      },
      include: {
        companyGroup: true,
      },
    });

    for (const company of singleCompanies) {
      const data = {
        'Company ID': company.id,
        'Brand ID': '',
        'Brand Name': '',
        Mix: '',
        'Sub-mix': '',
        'Brand description': '',
        'Brand products': '',
        Description: company.description,
        Logo: '',
        Group: company.companyGroup?.name ?? '',
        'Customer Code': company.customerCode,
        'Company Name': company.name,
        Type: company.type,
        Address: company.address,
        Country: company.country,
        State: '',
        City: company.city,
        'Zip Code': company.zip,
        Email: company.email,
        Phone: company.phone,
        RC: company.rc,
        'RC City': company.cityRC,
        TP: company.patente,
        IF: company.taxIF,
        'Capital Social': company.capital,
        ICE: company.ice,
        'Legal Representative':
          company.managerTitle + '-' + company.managerName,
        Position: company.managerPosition,
      };

      readyToParse.push(data);
    }

    this.save(readyToParse, 'Companies');
  }

  async exportContacts() {
    console.log('Exporting Contacts...');

    const contacts = await this.prisma.contact.findMany({
      include: {
        brands: true,
      },
    });

    const readyToParse = contacts.flatMap((contact) => {
      return contact.brands.map((brand) => {
        const data = {
          'Contact ID': contact.id,
          Title: contact.title,
          'First Name': contact.firstname,
          'Last Name': contact.name,
          Position: contact.position,
          Email: contact.email,
          Mobile: contact.mobile,
          Phone: contact.phone,
          'Brand ID': brand.id,
          'Brand Name': brand.name,
        };
        this.addSchema(data, 'Contacts');
        return data;
      });
    });

    this.save(readyToParse, 'Contacts');
  }

  async exportLeases() {
    console.log('Exporting Leasings...');

    const bookings = await this.prisma.booking.findMany({
      include: {
        brand: true,
        company: {
          include: {
            companyGroup: true,
          },
        },
        prospect: true,
        units: {
          include: {
            floor: {
              include: {
                retailCenter: true,
              },
            },
          },
        },
        proposalEdits: true,
      },
    });

    const readyToParse = bookings.flatMap((booking) => {
      return booking.proposalEdits.map((pe) => {
        const unit = booking.units.find((u) => u.unitId === pe.unitId);
        if (!unit) return {};
        const data = {
          ID: booking.id,
          'Price/HT': booking.total,
          Type: booking.type,
          'Scheduled installation': '',
          From: this._dateParser(toUtc(booking.dateFrom)),
          To: this._dateParser(toUtc(booking.dateTo)),
          'Asset Name': unit.floor.retailCenter.name,
          'Asset ID': unit.floor.retailCenter.id,
          Floor: unit.floor.name,
          Unit: unit.unitId,
          GLA: pe.unitSurface,
          'Brand ID': booking.brand.id,
          'Brand Name': booking.brand.name,
          'Company ID': booking.company.id,
          'Company Name': booking.company.name,
          Group: booking.company.companyGroup?.name ?? '',
          'Contact full name':
            booking.prospect.firstname + ' ' + booking.prospect.name,
          'Contact ID': booking.prospect.id,
        };

        this.addSchema(data, 'Leases');
        return data;
      });
    });

    this.save(readyToParse, 'Leases');
  }
  async exportTeam() {
    console.log('Exporting Team...');

    const users = await this.prisma.userProfile.findMany({
      include: {
        role: true,
      },
    });

    const readyToParse = users.map((user) => {
      const data = {
        ID: user.id,
        'First Name': user.firstName,
        'Last Name': user.name,
        'Mobile Phone': user.mobilePhone,
        Phone: user.phone,
        Email: user.email,
        Function: user.jobTitle,
        Role: user.role.name,
        Photo: user.picture,
      };

      this.addSchema(data, 'Teams');
      return data;
    });

    this.save(readyToParse, 'Teams');
  }

  private _dateParser(date: Date) {
    return moment(date).format('DD/MM/YYYY hh:mm');
  }
}

const instance = new ExportData(true);
instance.exportAll();
