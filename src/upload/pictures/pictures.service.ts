import { Injectable } from '@nestjs/common';
import path from 'path';
import fs from 'fs';
import { PrismaService } from '../../prisma.service';

const { optimize } = require('svgo');
const sharp = require('sharp');

@Injectable()
export class PicturesService {
  constructor(private prisma: PrismaService) {}

  async uploadedFiles(files: Array<Express.Multer.File>, body) {
    const uploadType = body.type;

    const newDir = path.join(__dirname, `../../../../uploads/${uploadType}`);
    fs.mkdirSync(newDir, { recursive: true });
    const filesUploaded = [];

    await Promise.all(
      files.map(async (file) => {
        const oldPath = path.join(__dirname, `../../../../${file.path}`);
        const newPath = path.join(
          __dirname,
          `../../../../uploads/${uploadType}/${file.filename}.${
            file.originalname.split('.')[1]
          }`,
        );

        if (fs.existsSync(oldPath)) fs.renameSync(oldPath, newPath);
        const newFilePath = path.join(
          __dirname,
          `../../../../${uploadType}/${file.filename}.${
            file.originalname.split('.')[1]
          }`,
        );

        if (uploadType == 'unit') {
          let newFileName = `${file.filename}.${
            file.originalname.split('.')[1]
          }`;

          const image = await sharp(newFilePath);
          const metadata = await image.metadata();

          if (metadata.width > 1500) {
            newFileName = await this.resizeImg(
              newFilePath,
              file.filename,
              uploadType,
            );
            filesUploaded.push({
              filePath: `${newFileName}`,
            });
          } else {
            filesUploaded.push({
              filePath: `/uploads/${uploadType}/${newFileName}`,
            });
          }
        }

        if (uploadType == 'media') {
          let newFileName = `${file.filename}.${
            file.originalname.split('.')[1]
          }`;
          fs.writeFileSync(
            path.join(
              __dirname,
              `../../../../uploads/${uploadType}/${newFileName}`,
            ),
            file.buffer,
          );
          filesUploaded.push({
            filePath: `/uploads/${uploadType}/${newFileName}`,
            fileType: file.mimetype,
          });
        }
      }),
    );
    return filesUploaded;
  }

  async resizeImg(filePath, fileName, type) {
    const image = await sharp(filePath);
    const metadata = await image.metadata();
    const fileNamePrefix = fileName.split('.')[0];

    image
      .resize({ width: 1500 })
      .webp()
      .toFile(
        path.join(
          __dirname,
          `../../../../uploads/${type}/${fileNamePrefix}.webp`,
        ),
      )
      .then((info) => {
        // console.log(info);
      })
      .catch((err) => {
        console.error(err);
      });

    return `/uploads/${type}/${fileNamePrefix}.webp`;
  }
}
