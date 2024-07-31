import { join } from 'path';
import { Booking } from 'src/booking/entities/booking.entity';
import { Floor } from 'src/floor/entities/floor.entity';
import { Unit } from 'src/unit/entities/unit.entity';
import { formatDateShort } from '../../utils/date';
import { DocManager } from '../../utils/DocManager';
import { formatLocalNumber, moneyAmount } from '../../utils/money';
import { INode, parse, stringify } from 'svgson';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { TemplateType } from 'src/utils/DocManager/TemplateManager';
import { ClientManager } from 'src/prisma/ClientManager';
import {
  avatarText,
  getBBox,
  isBooked,
  stringToColor,
} from 'src/utils/helpers';
import { RetailCenter } from '../../retailCenter/entities/retailcenter.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import moment from 'moment';
import { Specialty } from '../../unit/entities/specialty.entity';

export class ProposalGenerator {
  static unitsColors: string[] = [];

  static async proposalCover(outputPath: string) {
    const data = {
      bg: `http://127.0.0.1:${process.env.PORT}${
        ClientManager.getClient().media.proposal
      }`,
      logo: `http://127.0.0.1:${process.env.PORT}${
        ClientManager.getClient().media.logoLight
      }`,
      // docTitle: title,
    };

    const docMan = new DocManager(TemplateType.PROPOSAL_COVER);
    await docMan.compile(data, true);
    await docMan.print(outputPath);
    return true;
  }

  static async assetCover(rc: RetailCenter, outputPath: string) {
    const firstLineImages: (string | undefined)[] = [];
    firstLineImages.push(
      rc.picture
        ? `http://127.0.0.1:${process.env.PORT}${rc.picture}`
        : undefined,
    );
    const pictures = rc.pictures;

    for (let index = 0; index < 1; index++) {
      if (pictures[index]) {
        firstLineImages.push(
          `http://127.0.0.1:${process.env.PORT}${pictures[index].filePath}`,
        );
      } else {
        firstLineImages.push('');
      }
    }
    const secondLineImages: (string | undefined)[] = [];
    for (let index = 0; index < 4; index++) {
      if (index >= 1) {
        if (pictures[index]) {
          secondLineImages.push(
            `http://127.0.0.1:${process.env.PORT}${pictures[index].filePath}`,
          );
        } else {
          secondLineImages.push('');
        }
      }
    }

    const data = {
      RetailCenterName: rc.name,
      RetailCenterCity: rc.city,
      RetailCenterVisitors: rc.annualVisitors,
      RetailCenterLogo: `http://127.0.0.1:${process.env.PORT}${rc.logo}`,
      firstLineImages,
      secondLineImages,
    };
    const docMan = new DocManager(TemplateType.PROPOSAL_ASSET_COVER);
    await docMan.compile(data, true);
    await docMan.print(outputPath);
    return true;
  }

  static async assetDetails(
    rc: RetailCenter,
    brands: Brand[],
    outputPath: string,
  ) {
    const nbFloors = rc.floors.length;
    const nbUnits = rc.floors.flatMap((fl) => fl.units).length;

    const brandLogos = [];
    for (const brand of brands) {
      const logo = await this.getBrandLogo(brand.logo, brand.name);
      brandLogos.push(logo);
    }

    const data = {
      openingYear: rc.openingYear,
      parkingSpaces: rc.parkingSpaces,
      visitorsNumber: formatLocalNumber(rc.annualVisitors) + '/an',
      primaryColor: ClientManager.getClient().primaryColor,
      nbUnits,
      nbFloors,
      surface: rc.surface,
      flagShip: rc.flagShip,
      ownerEntity: rc.ownerEntity,
      address: rc.address,
      areaMap: rc.areaMap
        ? `http://127.0.0.1:${process.env.PORT}${rc.areaMap}`
        : '',
      demography: rc.demography?.slice(0, 400),
      demographyLength: rc.demography?.length ?? 0,
      logosUrls: brandLogos.slice(0, 90),
      logosUrlsLength: brandLogos.slice(0, 90).length ?? 0,
      retailCenterDescription: rc.description?.slice(0, 400),
      retailCenterDescriptionLength: rc.description?.length ?? 0,
      mixMerchandising: rc?.mixMerchandising?.slice(0, 200),
      mixMerchandisingLength: rc.mixMerchandising?.length ?? 0,
      logo: `http://127.0.0.1:${process.env.PORT}${
        ClientManager.getClient().media.logoLight
      }`,
    };
    const docMan = new DocManager(TemplateType.PROPOSAL_ASSET_DETAILS);
    await docMan.compile(data, true);
    await docMan.print(outputPath);
    return true;
  }

  static async assetInfo(rc: RetailCenter, outputPath: string) {
    let specialties: Specialty[] = [];
    rc.floors.map((floor) => {
      floor.units.map((unit) => {
        unit.specialities.map((specialty) => {
          specialties.push(specialty);
        });
      });
    });
    // Create a Map to store the counts for each specialty
    const specialtyCountMap = new Map();

    // Iterate through the array and count the units for each specialty
    specialties.forEach((specialty) => {
      const currentCount = specialtyCountMap.get(specialty.alias) || 0;
      specialtyCountMap.set(
        specialty.alias,
        currentCount + specialty.units.length,
      );
    });

    // Convert the Map to the desired format
    const literalSpecialties = Array.from(
      specialtyCountMap,
      ([alias, count]) => `${count} ${alias}`,
    );

    console.log(literalSpecialties);
    const data = {
      retailCenterDescription: rc.description,
      specialtyLeasing: rc.specialtyLeasing,
      socialMediaStats: rc.socialMediaStats,
      workHours: rc.workHours ? JSON.parse(rc.workHours ?? '[]') : [],
      informationContact: rc.informationContact
        ? JSON.parse(rc.informationContact ?? '[]')
        : [],
      literalSpecialties,
    };
    const docMan = new DocManager(TemplateType.PROPOSAL_ASSET_INFO);
    await docMan.compile(data, true);
    await docMan.print(outputPath);
    return true;
  }

  static async floorPresentation(
    floor: Floor,
    units: Unit[],
    booking: Booking,
    retailCenterName: string,
    retailCenterCity: string,
    outputPath: string,
  ) {
    const planSvg = await this.generatePlan(units, floor, true, true, true);
    const data = {
      themeColor: ClientManager.getClient().primaryColor,
      floorName: floor.name,
      retailCenterCity,
      retailCenterName,
      logo:
        'data:image/png;base64,' +
        (await DocManager.getImageBase64Data(
          join(
            __dirname,
            `../../../../${ClientManager.getClient().media.logo}`,
          ),
        )),
      planMarked: planSvg,
      isSpecialtyOrMedia: booking.type !== 'HOT',
      units: units.map((unit, index) => {
        const edit = booking.proposalEdits.find(
          (p) => p.unitId === unit.unitId,
        );
        const unitSurface = edit?.unitSurface ?? unit.surface ?? 0;
        let typeLiteral = '';
        switch (unit.rentType) {
          case 1:
            typeLiteral = 'Long Term';
            break;
          case 2:
            typeLiteral = 'Stand';
            break;
          case 3:
            typeLiteral = 'Media';
            break;
        }
        return {
          ...unit,
          site: index + 1,
          id: unit.unitId,
          unitColor: this.unitsColors[index],
          unitSurface,
          unitPrice: moneyAmount(edit?.unitPrice ?? unit.monthPrice ?? 0),
          typeLiteral,
          fromDate: moment(booking.dateFrom).format('DD/MM/YYYY'),
          toDate: moment(booking.dateTo).format('DD/MM/YYYY'),
        };
      }),
    };

    const docMan = new DocManager(TemplateType.PROPOSAL_FLOOR);
    await docMan.compile(data, true);
    await docMan.print(outputPath);
    return true;
  }

  static async unitDetails(
    floor: Floor,
    unit: Unit,
    booking: Booking,
    rc: RetailCenter,
    user: {
      picture: string;
      name: string;
      firstName: string;
      mobilePhone: string;
      email: string;
    },
    outputPath: string,
  ) {
    const edit = booking.proposalEdits.find((p) => p.unitId === unit.unitId);
    const unitSurface = edit?.unitSurface ?? unit.surface ?? 0;
    const unitPrice = edit?.unitPrice ?? 0;
    const planSvg = await this.generatePlan([unit], floor, true, false, false);

    let typeLiteral = '';
    switch (unit.rentType) {
      case 1:
        typeLiteral = 'Long Term';
        break;
      case 2:
        typeLiteral = 'Specialty';
        break;
      case 3:
        typeLiteral = 'Media';
        break;
    }

    const unitImage = await this.getUnitPicture(unit.mainPicture);

    if (user.picture === 'default' || !user.picture) {
      user.picture =
        'https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg';
    } else {
      user.picture = `http://127.0.0.1:${process.env.PORT}${user.picture}`;
    }

    const data = {
      user,
      planMarked: planSvg,
      retailCenterCity: rc.city,
      retailCenterName: rc.name,
      themeColor: ClientManager.getClient().primaryColor,
      clientLogo: `http://127.0.0.1:${process.env.PORT}${
        ClientManager.getClient().media.logo
      }`,
      unitImage,
      ...unit,
      id: unit.unitId,
      type: 'STAND',
      gla: unitSurface,
      prix: `${moneyAmount(unitPrice ?? unit.monthPrice ?? 0)}/Mois`,
      retailCenterLogo: `http://127.0.0.1:${process.env.PORT}${rc.logo}`,
      floorName: floor.name,
      unitDescription:
        unit.description.length != 0
          ? unit.description
          : 'pas de description pour cette unité',
      dateFrom: formatDateShort(booking.dateFrom),
      dateTo: formatDateShort(booking.dateTo),
      unitColor: stringToColor(unit.id),
      mezzanine: unit.mezzanine ?? 0,
      terrasse: unit.terrasse ?? 0,
      unitSurface,
      unitPrice: moneyAmount(edit?.unitPrice ?? unit.monthPrice ?? 0),
      glaPond:
        unitSurface + (unit.mezzanine ?? 0) / 2 + (unit.terrasse ?? 0) / 2,
      typeLiteral,
      isLongTerm: unit.rentType === 1,
    };

    const docMan = new DocManager(TemplateType.PROPOSAL_UNIT_DETAILS);
    await docMan.compile(data, true);
    await docMan.print(outputPath);
    return true;
  }

  static async monoPlan(
    floor: Floor,
    unit: Unit,
    rc: RetailCenter,
    outputPath: string,
  ) {
    const data = {
      themeColor: ClientManager.getClient().primaryColor,
      logo: `http://127.0.0.1:${process.env.PORT}${
        ClientManager.getClient().media.logoLight
      }`,
      retailCenterName: rc.name,
      retailCenterLevel: floor.name,
      unitId: unit.unitId,
      monoPlan: `http://127.0.0.1:${process.env.PORT}${
        unit?.documents?.find((doc) => doc.type === 'MONOPLAN').filePath
      }`,
      RetailCenterLogo: `http://127.0.0.1:${process.env.PORT}${rc.logo}`,
      informationContact: rc.informationContact
        ? JSON.parse(rc.informationContact).map((i) => i.email)
        : [],
    };
    const docMan = new DocManager(TemplateType.PROPOSAL_MONO_PLAN);
    await docMan.compile(data, true);
    await docMan.print(outputPath);
    return true;
  }

  static async generatePlan(
    bookingUnits: Unit[],
    floor: Floor,
    withMark = true,
    withLogos = false,
    withNumber = false,
  ) {
    const units = floor.units;
    const svgContent = await this.getPlan(floor.svgBluePrint);
    const svgObj = await parse(svgContent);

    const logos: INode[] = [];
    const numbers: INode[] = [];
    const patterns: INode[] = [];
    const logoHolders: INode[] = [];
    this.unitsColors = [];
    for (const child of svgObj.children) {
      const unitData = bookingUnits.find(
        (u) => u.unitId === child.attributes.id,
      );
      const index = bookingUnits.findIndex(
        (u) => u.unitId === child.attributes.id,
      );
      if (unitData) {
        const color = stringToColor(unitData.id);
        if (withMark) {
          if (child.attributes.class == 'unit-wrapper') {
            const newEl = child.children.find((c) => c.name === 'circle');
            const unit = bookingUnits.find(
              (unit) => unit.unitId === newEl?.attributes?.id,
            );
            if (unit && newEl) {
              const fillColor = color;
              newEl.attributes.style = `fill: ${fillColor}; stroke: #606060;`;
              this.unitsColors.push(fillColor); // Store the color
            }
          } else {
            const fillColor = color;
            child.attributes.style = `fill: ${color}; stroke: #606060;`;
            this.unitsColors.push(fillColor); // Store the color
          }

          if (withNumber) {
            const { centerX, centerY } = getBBox(child);

            const number: INode = this._generateNumberCircle(
              centerX,
              centerY,
              color,
              index + 1,
            );

            numbers.push(number);
          }
        }
      } else {
        const unit = units.find((u) => u.unitId === child.attributes.id);

        if (unit) {
          const unitColor = this._getUnitStatusColor(unit);

          if (child.attributes.class == 'unit-wrapper') {
            const newEl = child.children.find((c) => c.name === 'circle');
            if (newEl) {
              newEl.attributes.style = `fill: ${unitColor}; stroke: #FFFFFF;`;
            }
          } else {
            child.attributes.style = `fill: ${unitColor}; stroke: #FFFFFF;`;
          }
        }
      }

      if (withLogos) {
        const unit = units.find((u) => u.unitId === child.attributes.id);
        if (unit) {
          if (isBooked(unit)) {
            const { centerX, centerY, boxHeight, boxWidth } = getBBox(child);
            // Handle Logos
            let logo = await this.getBrandLogo(
              unit.bookings[0].brand.logo,
              unit.bookings[0].brand.name,
            );

            if (unit.unitLogoMetadata) {
              const width = unit.unitLogoMetadata.width;
              const height = unit.unitLogoMetadata.height;
              const x = centerX - width / 2 + (unit.unitLogoMetadata.x ?? 0);
              const y = centerY - height / 2 + (unit.unitLogoMetadata.y ?? 0);

              if (
                unit.unitLogoMetadata.logo &&
                unit.unitLogoMetadata.logo !== ''
              ) {
                logo = `http://localhost:${process.env.PORT}${unit.unitLogoMetadata.logo}`;
              }

              const image = this.generateSVGLogos(
                child.attributes.id,
                logo,
                width,
                height,
                x,
                y,
                unit.unitLogoMetadata.rotation,
                1 /* unit.unitLogoMetadata.scale */,
              );
              logos.push(image);
            } else {
              const width = Math.min(boxHeight, boxWidth);
              const height = Math.min(boxHeight, boxWidth);

              const x = centerX - width / 2;
              const y = centerY - height / 2;
              const image: INode = {
                name: 'image',
                type: 'element',
                value: '',
                children: [],
                attributes: {
                  id: 'logo-' + child.attributes.id,
                  'xlink:href': logo,
                  height: height.toString(),
                  width: width.toString(),
                  x: x.toString(),
                  y: y.toString(),
                  'transform-origin': `center`,
                },
              };

              logos.push(image);
            }
          }
        }
      }
    }
    if (patterns.length > 0) {
      const defs: INode = {
        name: 'defs',
        type: 'element',
        value: '',
        children: patterns,
        attributes: {},
      };
      svgObj.children.unshift(defs);
    }
    svgObj.children = [
      ...svgObj.children,
      ...logos,
      ...logoHolders,
      ...numbers,
    ];
    return stringify(svgObj);
  }

  private static _generateNumberCircle(
    x: number,
    y: number,
    fill: string,
    value: number,
  ) {
    const numberElement: INode = {
      name: 'g',
      type: 'element',
      value: '',
      attributes: {},
      children: [
        {
          name: 'circle',
          type: 'element',
          value: '',
          attributes: {
            cx: x.toString(),
            cy: y.toString(),
            r: '20',
            style: `fill: ${fill}`,
            stroke: 'black',
            strokeWidth: '1',
          },
          children: [],
        },
        {
          name: 'text',
          type: 'element',
          value: '',
          attributes: {
            x: x.toString(),
            y: y.toString(),
            'text-anchor': 'middle',
            fill: 'black',
            style: 'font: bolder 18px sans-serif;',
            'stroke-width': '2px',
            dy: '.3em',
          },
          children: [
            {
              name: '',
              type: 'text',
              value: value.toString(),
              attributes: {},
              children: [],
            },
          ],
        },
      ],
    };

    return numberElement;
  }

  private static _getUnitStatusColor(unit: Unit) {
    enum UnitStatusColors {
      AVAILABLE = '#E8E8E8',
      UNAVAILABLE = '#888888',
      HOT = '#EA5455',
      CONTRACT = '#FF9F43',
    }

    if (!unit) return UnitStatusColors.UNAVAILABLE;
    const currDate = new Date();

    const booking = unit.bookings.find((booking) => {
      return (
        new Date(booking.dateFrom) <= currDate &&
        new Date(booking.dateTo) >= currDate
      );
    });

    const isBusy =
      booking &&
      (booking.status === 3 ||
        booking.signedAt !== null ||
        booking.contractComplete === true);

    if (isBusy) return UnitStatusColors.UNAVAILABLE;

    if (booking) {
      const docs = booking?.documents?.map((doc) => doc.type) ?? [];
      if (docs.includes('HOT') && !docs.includes('CONTRACT'))
        return UnitStatusColors.HOT;
      else if (docs.includes('CONTRACT')) return UnitStatusColors.CONTRACT;
    }

    return UnitStatusColors.AVAILABLE;
  }

  private static generateSVGLogos(
    unitId: string,
    logo: string,
    _width: number,
    _height: number,
    x: number,
    y: number,
    rotation: number,
    scale: number,
  ) {
    const width = _width * scale;
    const height = _height * scale;

    const _x = x;
    const _y = y;

    const image: INode = {
      name: 'image',
      type: 'element',
      value: '',
      children: [],
      attributes: {
        id: 'logo-' + unitId,
        'xlink:href': logo,
        height: height.toString(),
        width: width.toString(),
        x: _x.toString(),
        y: _y.toString(),
        transform: `rotate(${rotation.toString()})`,
        'transform-origin': `center`,
        style: 'transform-box: fill-box;',
      },
    };

    return image;
  }

  private static async getUnitPicture(unitPicture: string | null | undefined) {
    let path = '';
    if (unitPicture && unitPicture !== '' && unitPicture !== 'default') {
      path = join(__dirname, `../../../..`, unitPicture);
      if (!existsSync(path)) {
        path = join(__dirname, `../../../../uploads/unitDefault.jpg`);
      }
    } else {
      path = join(__dirname, `../../../../uploads/unitDefault.jpg`);
    }

    const base64 = await DocManager.getImageBase64Data(path);
    return 'data:image/png;base64,' + base64;
  }

  private static async getBrandLogo(logo: string, brandName: string) {
    let logoBase64 = '';
    if (logo === '' || logo === 'default') {
      logoBase64 = await avatarText(brandName);
    } else {
      const path = join(__dirname, '../../../../', logo);
      if (existsSync(path)) {
        // const base64 = await DocManager.getImageBase64Data(
        //   join(__dirname, '../../../../', logo),
        // );
        // logoBase64 = `data:image/png;base64,${base64}`;
        logoBase64 = `http://localhost:${process.env.PORT}${logo}`;
      } else {
        logoBase64 = await avatarText(brandName);
      }
    }

    return logoBase64;
  }

  private static async getPlan(path: string) {
    const filePath = join(__dirname, '../../../../', path);
    return await readFile(filePath, {
      encoding: 'utf8',
    });
  }
}
