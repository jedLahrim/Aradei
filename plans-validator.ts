import { PrismaClient } from '@prisma/client';
import { existsSync } from 'fs';
import { mkdir, readFile, readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { INode, parse, stringify } from 'svgson';

const prisma = new PrismaClient();

function moveElement<T>(array: T[], fromIndex: number, toIndex: number): T[] {
  if (
    fromIndex < 0 ||
    fromIndex >= array.length ||
    toIndex < 0 ||
    toIndex >= array.length
  ) {
    throw new Error('Invalid indices provided');
  }

  const newArray = [...array];

  const [element] = newArray.splice(fromIndex, 1);

  newArray.splice(toIndex, 0, element);

  return newArray;
}

class UpdateSVG {
  svg: string;
  constructor(svg: string) {
    this.svg = svg;
  }

  parsedSVG: INode | undefined;

  async parse() {
    this.parsedSVG = await parse(this.svg);
  }

  private async getUnitType(unitId: string) {
    const unit = await prisma.unit.findFirst({
      where: {
        unitId,
      },
    });

    if (!unit) return null;

    let className = '';
    switch (unit.rentType) {
      case 1:
        className = 'LONGTERM';
        break;
      case 2:
        className = 'SPECIALTY';
        break;
      case 3:
        className = 'SPECIALTY';
        break;
    }
    return className;
  }

  orderUnits() {
    const grounds = this.parsedSVG.children.filter(
      (el) => el.attributes.id === 'GROUND',
    );
    grounds.forEach((_, index) => {
      this.parsedSVG.children = moveElement(this.parsedSVG.children, index, 1);
    });
  }

  trimId(id: string) {
    let result = id.trim().replace('x5F_', '');
    result = result.trim().replace('_1_', '');
    // if (result.endsWith('_')) {
    //   result = result.slice(0, result.length - 1);
    // }
    return result;
  }

  unitsElements: INode[] = [];
  async cleanUnits(el: INode) {
    const supportedTags = [
      'rect',
      'circle',
      'ellipse',
      'line',
      'polyline',
      'polygon',
    ];
    for (const element of el.children) {
      if (element.name == 'g') {
        for (const child of element.children) {
          await this.cleanUnits(child);
        }
      } else if (
        element.attributes.id &&
        element.name != 'style' &&
        supportedTags.includes(element.name)
      ) {
        this.unitsElements.push(element);
      }
    }

    this.parsedSVG.children = this.unitsElements.concat(
      this.parsedSVG.children.filter(
        (node) => node.attributes.id === 'GROUND' || node.name === 'style',
      ),
    );
  }

  async checkUnitTypes() {
    const unitIds: string[] = [];
    for (const element of this.parsedSVG.children) {
      delete element.attributes.class;
      if (element.attributes.id && element.attributes.id.startsWith('GROUND')) {
        element.attributes.id = 'GROUND';
      }
      if (element.attributes.id === 'GROUND') {
        element.attributes.class = 'ground';
      }
      if (
        element.name !== 'g' &&
        element.name !== 'style' &&
        element.attributes.id &&
        element.attributes.id !== 'GROUND'
      ) {
        element.attributes.id = this.trimId(element.attributes.id);
        const type = await this.getUnitType(element.attributes.id);

        if (type === null) {
          unitIds.push(element.attributes.id);
          element.attributes.class = 'st0';
        } else {
          element.attributes.class = type + ' st0';
        }
      }
    }

    return unitIds;
  }

  save() {
    this.parsedSVG.attributes.id = 'floorPlan';
    this.parsedSVG.children = this.parsedSVG.children.filter(
      (node) => node.name != 'style',
    );

    const styleEl: INode = {
      name: 'style',
      attributes: { type: 'text/css' },
      type: 'element',
      value: '',
      children: [
        {
          name: '',
          type: 'text',
          attributes: {},
          children: [],
          value: `
          .ground{fill:#cdc3a0;}
          .pictos{opacity:0.2}
          .merged{display: none !important}
          /* UNITS STYLE */
          .selected {
              fill:#61C478;
              stroke:#61C478;
              stroke-width:20;
              stroke-opacity:0.5;
          }
          .err {
            fill: red;
          }
      
          .st0,
          .st1,
          .st2,
          .grp {
            fill: #E8E8E8;
            stroke: #fff;
            stroke-width: 1px;
            cursor: pointer;
          }
          
          /* END UNITS STYLE */
      
      
      
          /* UNITS MOUSE OVER STYLE */
          .st0:hover, .st1:hover, .st2:hover, .grp:hover {
              fill:#dbdbdb;
          }
          /* UNITS END MOUSE OVER STYLE */
      
          /* BUSY UNITS STYLE */
          .busyUnit {fill:#E4E4E4;stroke:#606060;stroke-width:0.25;stroke-miterlimit:10;cursor:default !important}
          .busyUnit:hover {fill:#E4E4E4;stroke:#606060;stroke-width:0.25;stroke-miterlimit:10;}
          /* END BUSY UNITS STYLE */
      
          /* USED IN PDF ONLY */
          .selectedGrey{fill:#E4E4E4;stroke:#606060;stroke-width:0.25;stroke-miterlimit:10;}
          .selected0{fill:blue;stroke:#231F20;stroke-width:0.25;stroke-miterlimit:10;}
          .selected1{fill:red;stroke:#231F20;stroke-width:0.25;stroke-miterlimit:10;}
          .selected2{fill:orange;stroke:#231F20;stroke-width:0.25;stroke-miterlimit:10;}
          .selected3{fill:black;stroke:#231F20;stroke-width:0.25;stroke-miterlimit:10;}
          .selected4{fill:green;stroke:#231F20;stroke-width:0.25;stroke-miterlimit:10;}
          /* END USED IN PDF ONLY */`,
        },
      ],
    };
    this.parsedSVG.children.unshift(styleEl);
    return stringify(this.parsedSVG);
  }
}

(async () => {
  const IS_TEST = false;

  const plansRootPath = join(__dirname, '/uploads/plans/');
  const folders = await readdir(plansRootPath);
  const unitIds: { mall: string; file: string; units: string[] }[] = [];
  let count = 0;
  for (const folder of folders) {
    const files = await readdir(join(plansRootPath, folder));
    for (const file of files) {
      const svgPath = join(plansRootPath, folder, file);
      const svgContent = await readFile(svgPath, { encoding: 'utf8' });
      const _updateSVG = new UpdateSVG(svgContent);
      await _updateSVG.parse();
      // await _updateSVG.cleanUnits(_updateSVG.parsedSVG);
      const ids = await _updateSVG.checkUnitTypes();
      _updateSVG.orderUnits();
      const newSvg = _updateSVG.save();
      if (IS_TEST) {
        if (!existsSync(join(__dirname, 'svgs', folder))) {
          await mkdir(join(__dirname, 'svgs', folder), {
            recursive: true,
          });
        }
        await writeFile(join(__dirname, 'svgs', folder, `${file}`), newSvg);
      } else {
        await writeFile(svgPath, newSvg);
      }
      count += ids.length;
      if (ids.length > 0) {
        unitIds.push({
          mall: folder,
          file,
          units: ids,
        });
      }
    }
  }

  await writeFile(
    join(__dirname, 'svg-plans-checker.json'),
    JSON.stringify({ count, unitIds }, null, 2),
  );

  console.log('DONE');
})();
