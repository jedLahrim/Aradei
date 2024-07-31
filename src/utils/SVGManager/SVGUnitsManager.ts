import { INode, parse, stringify } from 'svgson';
import { UnitTypes } from '../enums';
import {
  CreateMediaUnitAttr,
  CreateTemporaryUnitAttr,
  UnitAttributes,
} from '../types/unit.types';

/**
 * Handles specialty units
 * - Create new unit
 * - Update unit
 * - Delete unit
 */
export class SVGUnitsManager {
  static async createElement(
    svgString: string,
    unitType: UnitTypes,
    attributes: UnitAttributes,
  ): Promise<string> {
    const node: INode = {
      name: '',
      type: 'element',
      value: '',
      attributes: {},
      children: [],
    };

    switch (unitType) {
      case UnitTypes.MEDIA:
        if ('width' in attributes) {
          node.name = 'rect';
          node.attributes = {
            id: attributes.unitId,
            class: attributes.class,
            x: attributes.x.toString(),
            y: attributes.y.toString(),
            width: attributes.width.toString(),
            height: attributes.height.toString(),
          };
        }
        break;
      case UnitTypes.TEMPORARY:
        if ('cx' in attributes) {
          node.name = 'circle';
          node.attributes = {
            id: attributes.unitId,
            class: attributes.class,
            cx: attributes.cx.toString(),
            cy: attributes.cy.toString(),
            r: attributes.r.toString(),
          };
        }
        break;
      default:
        throw new Error(`Unsupported unit type [${unitType.toString()}]`);
    }

    if (!node) throw new Error('Unit was not created');

    const root = await parse(svgString);
    root.children.push(node);
    return root ? stringify(root) : svgString;
  }
  static async updateElement(
    svgString: string,
    unitType: UnitTypes,
    attributes: CreateMediaUnitAttr | CreateTemporaryUnitAttr,
  ): Promise<string> {
    const root = await parse(svgString);
    const node = root.children.find(
      (node) => node.attributes.id === attributes.unitId,
    );
    if (!node) throw new Error('Unit was not created');

    switch (unitType) {
      case UnitTypes.MEDIA:
        if ('width' in attributes) {
          node.name = 'rect';
          node.attributes = {
            id: attributes.unitId,
            class: attributes.class,
            x: attributes.x,
            y: attributes.y,
            width: attributes.width,
            height: attributes.height,
          };
        }
        break;
      case UnitTypes.TEMPORARY:
        if ('cx' in attributes) {
          node.name = 'circle';
          node.attributes = {
            id: attributes.unitId,
            class: attributes.class,
            cx: attributes.cx,
            cy: attributes.cy,
            r: attributes.r,
          };
        }
        break;
      default:
        throw new Error(`Unsupported unit type [${unitType.toString()}]`);
    }

    return root ? stringify(root) : svgString;
  }
  static async deleteElement(svgString: string, unitId: string) {
    const root = await parse(svgString);
    const matchIndex = root.children.findIndex(
      (node) => node.attributes.id == unitId,
    );

    if (matchIndex == -1) {
      const unitWrapperIndex = root.children.findIndex(
        (node) =>
          node.attributes.class &&
          node.attributes.class.includes('unit-wrapper') &&
          node.children.find((cNode) => cNode.attributes.id === unitId),
      );
      if (unitWrapperIndex != -1) {
        root.children.splice(unitWrapperIndex, 1);
      }
    } else {
      root.children.splice(matchIndex, 1);
    }
    return root ? stringify(root) : svgString;
  }
}
