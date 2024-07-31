import { writeFile } from "fs/promises";
import { join } from "path";
import { parse, stringify } from "svgson";

/**
 * Handle detaching group from SVG
 */
export class SVGDetachGroup {
  static async detachGroup(
    svgString: string,
    groupId: string,
    unitsIds: string[]
  ): Promise<string> {
    const root = await parse(svgString);

    const groupUnit = root.children.find(
      (node) => node.attributes.id === groupId
    );

    if (!groupUnit) throw new Error(`Group with ID ${groupId} does not exist`);

    root.children = root.children.filter(
      (node) => node.attributes.id !== groupId
    );

    root.children.forEach((node) => {
      if (unitsIds.includes(node.attributes.id)) {
        node.attributes.class = node.attributes.class.replace(" merged", "");
      }
    });

    return root ? stringify(root) : svgString;
  }
}
