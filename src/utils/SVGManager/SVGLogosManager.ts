import { parse, stringify } from 'svgson';

/**
 * Handles Logos
 * - Add new logo
 * - Delete logo
 * - Update logo
 */
export class SVGLogosManager {
  static async addLogo(
    svgString: string,
    logoSvgString: string,
  ): Promise<string> {
    const parsed = await parse(svgString);

    let logosGroup = parsed.children.find(
      (node) => node.attributes.id == 'LOGOS',
    );
    if (!logosGroup) {
      logosGroup = {
        name: 'g',
        type: 'element',
        value: '',
        children: [],
        attributes: {
          id: 'LOGOS',
        },
      };
      parsed.children.push(logosGroup);
    }
    const groupParsed = await parse(`<svg>${logoSvgString}</svg>`);
    logosGroup.children.push(...groupParsed.children);

    return stringify(parsed);
  }

  static async updateLogo(
    svgString: string,
    logoId: string,
    logoSvgString: string,
  ): Promise<string> {
    const parsed = await parse(svgString);

    for (const node of parsed.children) {
      if (node.attributes.id === 'LOGOS') {
        let logo = node.children.find((logo) => logo.attributes.id === logoId);
        if (!logo) throw new Error(`Logo with id [${logoId}] does not exist`);
        const groupParsed = await parse(`<svg>${logoSvgString}</svg>`);
        logo.children = groupParsed.children;
      }
    }

    return stringify(parsed);
  }

  static async deleteLogos(svgString: string, ids: string[]): Promise<string> {
    const parsed = await parse(svgString);

    parsed.children.forEach((node) => {
      if (node.attributes.id === 'LOGOS') {
        node.children = node.children.filter(
          (logo) => !ids.includes(logo.attributes.id),
        );
      }
    });

    return stringify(parsed);
  }
}
