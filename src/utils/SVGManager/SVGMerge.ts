import { SVGPathData, encodeSVGPath } from "svg-pathdata";
import { SVGCommand } from "svg-pathdata/lib/types";
import { INode, parse, stringify } from "svgson";
import { SVGPathExtractor } from "./SVGPathExtractor";
import { writeFile } from "fs/promises";
import { join } from "path";

/**
 * Handle merging units
 */
export class SVGMerge {
  static async merge(
    SVGString: string,
    unitsIds: string[],
    newUnitId: string
  ): Promise<string> {
    // Parse SVG string
    const root = await parse(SVGString);

    if (!root) throw new Error("Cannot parse the SVG plan");

    // Get the selected units by unitId
    const selectedElements = root.children.filter((el: INode) =>
      unitsIds.includes(el.attributes.id)
    );

    if (
      selectedElements.some((el: INode) =>
        el.attributes.class.includes("merged")
      )
    ) {
      throw new Error("Unit already in a group");
    }

    // Extract path data
    const paths: string[] = [];

    selectedElements.forEach((pathElement: INode) => {
      const newPathData = SVGPathExtractor.getPathData(pathElement);
      if (newPathData) paths.push(newPathData);
    });

    const combinedPathDataString = await this.mergeSVGPaths(paths);

    // Create new element and update merged shapes
    selectedElements.forEach((el) => {
      if (!(el.attributes.class as String).includes("merged")) {
        el.attributes.class = `${el.attributes.class} merged`;
      }
    });

    const mergedPath: INode = {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        class: "LONGTERM grp",
        id: newUnitId,
        d: combinedPathDataString,
      },
      children: [],
    };

    root.children.push(mergedPath);

    return root ? stringify(root) : SVGString;
  }

  private static async mergeSVGPaths(paths: string[]): Promise<string> {
    const pathData: SVGCommand[] = [];

    for (const path of paths) {
      const parsedPathData = new SVGPathData(path);
      pathData.push(...parsedPathData.commands);
    }

    return encodeSVGPath(pathData);
  }
}
