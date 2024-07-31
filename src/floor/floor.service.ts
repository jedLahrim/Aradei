import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { parse, stringify } from 'svgson';
import { PrismaService } from '../prisma.service';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { AddLogoDto } from './dto/add-logo.dto';
import { RemoveLogosDto } from './dto/remove-logos.dto';
import { SVGManager } from 'src/utils/SVGManager';
import { UnitTypes } from 'src/utils/enums';
import { UnitAttributes } from 'src/utils/types/unit.types';

@Injectable()
export class FloorService {
  constructor(private prisma: PrismaService) { }

  async getPlan(floorId: string) {
    const plan = await this.prisma.floor.findUnique({
      where: {
        id: floorId,
      },
    });
    if (!plan) {
      // Handle the case where the plan is not found
      return null;
    }
    const fileUrl = `http://localhost:${process.env.PORT}${plan.svgBluePrint}`;

    const file = await axios.get(fileUrl);
    const svgObject = await stringify(file.data);

    return file.data;
  }

  async updatePlan(data: UpdatePlanDto): Promise<boolean> {
    const plan = await this.prisma.floor.findUnique({
      where: {
        id: data.floorId,
      },
    });

    if (!plan) throw new Error('Plan not found');

    const outUrl = join(__dirname, '../../../', plan.svgBluePrint);

    const svgFilePath = `http://localhost:${process.env.PORT}${plan.svgBluePrint}`;

    const svgFileContent = await axios.get<string>(svgFilePath);

    const unitType =
      data.tagName === 'rect' ? UnitTypes.MEDIA : UnitTypes.TEMPORARY;

    let attrs: UnitAttributes = {
      unitId: data.unitId,
      class: data.class,
      cx: parseFloat(data.cx) ?? 0,
      cy: parseFloat(data.cy) ?? 0,
      r: parseFloat(data.r) ?? 0,
      width: parseFloat(data.width) ?? 0,
      height: parseFloat(data.height) ?? 0,
      x: parseFloat(data.x) ?? 0,
      y: parseFloat(data.y) ?? 0,
    };

    const newSvg = await SVGManager.createElement(
      svgFileContent.data,
      unitType,
      attrs,
    );

    await writeFile(outUrl, newSvg, 'utf-8');

    return true;
  }

  async addLogo(data: AddLogoDto): Promise<boolean> {
    const plan = await this.prisma.floor.findUnique({
      where: {
        id: data.floorId,
      },
    });

    if (!plan) throw new Error('Plan not found');

    const outUrl = join(__dirname, '../../../', plan.svgBluePrint);

    const svgFilePath = `http://localhost:${process.env.PORT}${plan.svgBluePrint}`;

    const svgFileContent = await axios.get<string>(svgFilePath);

    const newSVG = await SVGManager.addLogo(svgFileContent.data, data.html);

    await writeFile(outUrl, newSVG, 'utf-8');

    return true;
  }

  async removeLogos(data: RemoveLogosDto): Promise<boolean> {
    const plan = await this.prisma.floor.findUnique({
      where: {
        id: data.floorId,
      },
    });

    if (!plan) throw new Error('Plan not found');

    const outUrl = join(__dirname, '../../../', plan.svgBluePrint);

    const svgFilePath = `http://localhost:${process.env.PORT}${plan.svgBluePrint}`;

    const svgFileContent = await axios.get<string>(svgFilePath);

    const newSVG = await SVGManager.deleteLogos(svgFileContent.data, data.ids);
    await writeFile(outUrl, newSVG, 'utf-8');

    return true;
  }

  async updateSpecialtyUnitsShapes() {
    const floors = await this.prisma.floor.findMany({
      select: {
        svgBluePrint: true,
      },
    });

    floors.forEach(async (floor) => {
      const outUrl = join(__dirname, '../../../', floor.svgBluePrint);

      const svgFilePath = `http://localhost:${process.env.PORT}${floor.svgBluePrint}`;

      const svgFileContent = await axios.get<string>(svgFilePath);

      const parsed = await parse(svgFileContent.data);

      const units = (
        await this.prisma.unit.findMany({
          where: {
            rentType: 3,
          },
          select: {
            unitId: true,
          },
        })
      ).map((unit) => unit.unitId);

      const elements = parsed.children.filter(
        (child) =>
          (child.attributes.class || '').toUpperCase().includes('SPECIALTY') &&
          units.includes(child.attributes.id),
      );

      elements.forEach((unit) => {
        if (unit.name.toLowerCase() !== 'rect') {
          const width = 25;
          unit.name = 'rect';
          unit.attributes.x = String(
            parseFloat(unit.attributes.cx) - width / 2,
          );
          unit.attributes.y = String(
            parseFloat(unit.attributes.cy) - width / 2,
          );
          unit.attributes.width = width.toString();
          unit.attributes.height = width.toString();
          delete unit.attributes.cx;
          delete unit.attributes.cy;
          delete unit.attributes.r;
        }
      });
      const updatedSvgContent = stringify(parsed);
      await writeFile(outUrl, updatedSvgContent, 'utf-8');
    });

    return true;
  }
}
