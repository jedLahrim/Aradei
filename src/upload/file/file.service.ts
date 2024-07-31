import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import path from 'path';
import fs from 'fs';
import { parse as csvParser } from 'csv-parse';
import { parse as svgParser } from 'svg-parser';

const { optimize } = require('svgo');
const sharp = require('sharp');

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {}

  async uploadedFile(file, body) {
    let uploadType = body.type;

    if (uploadType.startsWith('TECHNICAL')) {
      uploadType = 'technical';
    } else if (uploadType.startsWith('LEGAL')) {
      uploadType = 'legal';
    }

    const newDir = path.join(__dirname, `../../../../uploads/${uploadType}`);

    fs.mkdirSync(newDir, { recursive: true });
    const oldFile = path.join(__dirname, `../../../../${file.path}`);
    fs.renameSync(oldFile, path.join(newDir, file.filename));

    const newFilePath = path.join(newDir, file.filename);

    if (uploadType == 'plan') {
      const response = await this.planUpload(newFilePath, file.filename);
      return response;
    }

    const validUploadTypes = [
      'invoice',
      'contract',
      'signedContract',
      'paymentContract',
      'signedConvention',
      'paymentConvention',
      'signedHOT',
      'signedInstallation',
      'signedQuote',
      'signedCGV',
      'paymentQuote',
      'quotePayment',
      'purchasedOrder',
      'paymentReceipt',
      'legal',
      'technical',
      'commercialDocs',
      'insurance',
      'orderFromLead',
      'orderToClient',
    ];

    if (validUploadTypes.includes(uploadType)) {
      return { filename: `/uploads/${uploadType}/${file.filename}` };
    }

    // todo: change default behaviour

    if (uploadType == 'unitCsv') {
      const records: any[] = [];

      const parser = fs
        .createReadStream(newFilePath)
        .pipe(csvParser({ from_line: 2 }));

      for await (const record of parser) {
        records.push(record);
      }

      const emptyRows = records.filter((record) => record[0] == '').length;
      const emptyIds = records.filter(
        (record) => !Number.isInteger(parseInt(record[0][0])),
      ).length;

      const errors = [];

      if (emptyRows > 0) {
        errors.push({ msg: 'Bad file, empty rows ( no unit data )' });
      }

      if (emptyIds > 0) {
        errors.push({
          msg: 'Bad file, bad Ids ( ID column is not an integer )',
        });
      }

      if (errors.length > 0) return { err: errors };

      return { filePath: newFilePath, records: records };
    } else {
      const lazyImg = await this.makeLazy(
        newFilePath,
        file.filename,
        uploadType,
      );

      const resizedImg = await this.resizeThumbPic(
        newFilePath,
        file.filename,
        uploadType,
      );
      await this.deleteOriginal(newFilePath);
      const response = {
        filename: `/uploads/${uploadType}/${file.filename}`,
        filepath: resizedImg,
        lazySrc: lazyImg,
      };
      return response;
    }
  }

  async planUpload(filePath: string, fileName: string) {
    let countUnit = 0;
    const data = fs.readFileSync(filePath);

    const optimizedBlueprint = optimize(data, {
      path: filePath,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              convertShapeToPath: true,
              mergePaths: false,
            },
          },
        },
      ],
    });

    await fs.writeFile(filePath, optimizedBlueprint.data, (err) => {
      console.error('err', err);
    });

    const svgToParse = svgParser(optimizedBlueprint.data);
    const parsingSvg = svgToParse.children[0].children.map((el) => {
      if ((el.tagName = 'path')) countUnit++;
    });
    const parsedSvg = await Promise.all(parsingSvg);
    const response = {
      filename: `/uploads/plan/${fileName}`,
      filepath: filePath,
      unitCount: parsedSvg.length,
    };

    return response;
  }

  async deleteOriginal(filePath: string) {
    setTimeout(() => {
      fs.unlinkSync(filePath);
    }, 1000);
  }

  async resizeThumbPic(filePath: string, fileName: string, type: string) {
    const image = await sharp(filePath);
    const width = 1024;

    await image
      .resize({ width: width })
      .toFile(path.join(__dirname, `../../../../uploads/${type}/_${fileName}`));

    return `/uploads/${type}/_${fileName}`;
  }

  async makeLazy(filePath: string, fileName: string, type: string) {
    const image = await sharp(filePath);
    const fileNamePrefix = fileName.split('.')[0];

    await image
      .resize({ width: 20 })
      .webp()
      .toFile(
        path.join(
          __dirname,
          `../../../../uploads/${type}/${fileNamePrefix}_lz.webp`,
        ),
      );

    return `/uploads/${type}/${fileNamePrefix}_lz.webp`;
  }
}
