import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMixDto } from './dto/create-mix.dto';
import { Mix } from './entities/mix.entity';
import { CreateMixCategoryDto } from './dto/create-mix-category.dto';
import { UpdateMixDto } from './dto/update-mix.dto';
import { UpdateMixCategoryDto } from './dto/update-mixCategory.dto';
import { MixCategory } from './entities/mixCategory.entity';
import { AppError } from '../common/error/app-error';
import {
  ERR_MIX_CATEGORY_NOT_CREATED,
  ERR_MIX_NOT_CREATED,
  ERR_NOT_FOUND_MIX,
  ERR_NOT_FOUND_MIX_CATEGORY,
} from '../common/error/error-code';

@Injectable()
export class MixService {
  constructor(private prisma: PrismaService) {}

  async createMix(data: CreateMixDto): Promise<Mix> {
    try {
      return await this.prisma.mix.create({
        include: {
          MixCategory: true,
        },
        data: {
          alias: data.alias,
          MixCategory: {
            connect: {
              id: data.mixCategoryId,
            },
          },
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_MIX_NOT_CREATED, e));
    }
  }

  async updateMix(data: UpdateMixDto): Promise<Mix> {
    try {
      return await this.prisma.mix.update({
        where: {
          id: data.id,
        },
        include: {
          MixCategory: true,
        },
        data: {
          alias: data.alias,
          mixCategoryId: data.mixCategoryId,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_MIX));
    }
  }

  async createMixCategory(data: CreateMixCategoryDto): Promise<MixCategory> {
    try {
      return await this.prisma.mixCategory.create({
        include: {
          subMixes: true,
        },
        data: {
          alias: data.alias,
        },
      });
    } catch (e) {
      throw new NotFoundException(
        new AppError(ERR_MIX_CATEGORY_NOT_CREATED, e),
      );
    }
  }

  async updateMixCategory(data: UpdateMixCategoryDto): Promise<MixCategory> {
    try {
      return await this.prisma.mixCategory.update({
        where: {
          id: data.id,
        },
        include: {
          subMixes: true,
        },
        data: {
          alias: data.alias,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_MIX_CATEGORY));
    }
  }

  async removeMix(mixId: number): Promise<Mix> {
    try {
      return await this.prisma.mix.delete({
        where: {
          id: mixId,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_MIX));
    }
  }

  async removeMixCategory(mixCategoryId: number): Promise<MixCategory> {
    try {
      return await this.prisma.mixCategory.delete({
        where: {
          id: mixCategoryId,
        },
      });
    } catch (e) {
      throw new NotFoundException(new AppError(ERR_NOT_FOUND_MIX_CATEGORY));
    }
  }

  async getMixCategories(): Promise<MixCategory[]> {
    return await this.prisma.mixCategory.findMany({
      include: {
        subMixes: true,
      },
    });
  }

  async getMixes(): Promise<Mix[]> {
    return await this.prisma.mix.findMany({
      include: {
        MixCategory: true,
      },
    });
  }
}
