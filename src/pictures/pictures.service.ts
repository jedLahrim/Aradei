import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CreateBulkPictureDto,
  CreatePictureDto,
} from './dto/createPicture.dto';
import { Picture } from 'src/unit/entities/picture.entity';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class PictureService {
  constructor(private prisma: PrismaService) {}

  async createPictures(data: CreateBulkPictureDto) {
    const createdPictures: Picture[] = [];
    for (const picture of data.pictures) {
      const pic = await this.prisma.picture.create({
        data: {
          filePath: picture.filePath,
          brandId: picture.brandId,
          unitId: picture.unitId,
          retailCenterId: picture.retailCenterId,
        },
      });

      createdPictures.push(pic);
    }

    return createdPictures;
  }

  async removePicture(id: string) {
    const picture = await this.prisma.picture.delete({
      where: {
        id,
      },
    });

    unlink(join(__dirname, `../../../${picture.filePath}`));
    return true;
  }
}
