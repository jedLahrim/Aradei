import { UnitTypes } from "../enums";
import {
  CreateMediaUnitAttr,
  CreateTemporaryUnitAttr,
  UnitAttributes,
} from "../types/unit.types";
import { SVGDetachGroup } from "./SVGDetachGroup";
import { SVGMerge } from "./SVGMerge";
import { SVGUnitsManager } from "./SVGUnitsManager";
import { SVGLogosManager } from "./SVGLogosManager";

/**
 * SVG management class. Handles all SVG plan actions
 */
export class SVGManager {
  /**
   * Create new SVG unit element
   * @param svgString
   * @param unitType
   * @param attributes
   * @returns New svg plan
   */
  static async createElement(
    svgString: string,
    unitType: UnitTypes,
    attributes: UnitAttributes
  ): Promise<string> {
    return await SVGUnitsManager.createElement(svgString, unitType, attributes);
  }

  /**
   * Update unit
   * @param svgString
   * @param unitId
   * @param nodeData
   * @returns New svg plan
   */
  static async updateElement(
    svgString: string,
    unitType: UnitTypes,
    attributes: CreateMediaUnitAttr | CreateTemporaryUnitAttr
  ): Promise<string> {
    return await SVGUnitsManager.updateElement(
      svgString,
      unitType,
      attributes
    );
  }

  /**
   * Delete unit element
   * @param svgString
   * @param unitId
   * @returns New svg plan
   */
  static async deleteElement(
    svgString: string,
    unitId: string
  ): Promise<string> {
    return await SVGUnitsManager.deleteElement(svgString, unitId);
  }

  /**
   * Merge multiple units
   * @param SVGString
   * @param unitsIds
   * @param newUnitId
   * @returns New svg plan
   */
  static async groupElements(
    SVGString: string,
    unitsIds: string[],
    newUnitId: string
  ): Promise<string> {
    return await SVGMerge.merge(SVGString, unitsIds, newUnitId);
  }

  /**
   * Detach units group
   * @param svgString
   * @param groupId
   * @param unitsIds
   * @returns New svg plan
   */
  static async detachGroup(
    svgString: string,
    groupId: string,
    unitsIds: string[]
  ): Promise<string> {
    return await SVGDetachGroup.detachGroup(svgString, groupId, unitsIds);
  }

  /**
   * Add new logo to the plan
   * @param svgString
   * @param logoSvgString
   * @returns New svg plan
   */
  static async addLogo(
    svgString: string,
    logoSvgString: string
  ): Promise<string> {
    return await SVGLogosManager.addLogo(svgString, logoSvgString);
  }

  /**
   * Update existing logo attributes
   * @param svgString
   * @param logoId
   * @param newAttrs
   * @returns New svg plan
   */
  static async updateLogo(
    svgString: string,
    logoId: string,
    logoSvgString: string
  ): Promise<string> {
    return await SVGLogosManager.updateLogo(svgString, logoId, logoSvgString);
  }

  /**
   * Delete logo element
   * @param svgString
   * @param ids
   * @returns New svg plan
   */
  static async deleteLogos(svgString: string, ids: string[]) {
    return await SVGLogosManager.deleteLogos(svgString, ids);
  }
}
