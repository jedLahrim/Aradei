import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { join } from 'path';
import { writeFile } from 'fs/promises';
import { ERR_NOT_FOUND_PLAN } from '../../common/error/error-code';

@Injectable()
export class PlanService {
  constructor(private prisma: PrismaService) {}

  async updatePlan(body: { floorId: string; content: string }) {
    const plan = await this.prisma.floor.findUnique({
      where: {
        id: body.floorId,
      },
    });

    const outUrl = join(__dirname, '../../../../', plan.svgBluePrint);

    await writeFile(outUrl, body.content, 'utf-8');

    return body.content;
  }

  async getFloor(floorId: string) {
    const floor = await this.prisma.floor.findUnique({
      where: { id: floorId },
      include: { units: true },
    });
    if (!floor) throw new NotFoundException(ERR_NOT_FOUND_PLAN);
    return floor;
  }
}
