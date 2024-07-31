import { INode } from 'svgson';

/**
 * Extract path data from SVG shapes:
 * 'rect|circle|ellipse|line|polyline|polygon'
 */
export class SVGPathExtractor {
  static getPathData(element: INode): string | null {
    const pathData = element.attributes.d;
    if (pathData) {
      return pathData;
    }

    switch (element.name.toLowerCase()) {
      case 'rect':
        return this.extractRectPathData(element);
      case 'circle':
        return this.extractCirclePathData(element);
      case 'ellipse':
        return this.extractEllipsePathData(element);
      case 'line':
        return this.extractLinePathData(element);
      case 'polyline':
        return this.extractPolylinePathData(element);
      case 'polygon':
        return this.extractPolygonPathData(element);
      default:
        return null;
    }
  }

  private static extractRectPathData(rectElement: INode): string {
    const x = rectElement.attributes.x;
    const y = rectElement.attributes.y;
    const width = rectElement.attributes.width;
    const height = rectElement.attributes.height;
    return `M${x} ${y} H${x + width} V${y + height} H${x} Z`;
  }

  private static extractCirclePathData(circleElement: INode): string {
    const cx = parseFloat(circleElement.attributes.cx);
    const cy = parseFloat(circleElement.attributes.cy);
    const r = parseFloat(circleElement.attributes.r);
    return `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${
      cx + r
    } ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
  }

  private static extractEllipsePathData(ellipseElement: INode): string {
    const cx = parseFloat(ellipseElement.attributes.cx);
    const cy = parseFloat(ellipseElement.attributes.cy);
    const rx = parseFloat(ellipseElement.attributes.rx);
    const ry = parseFloat(ellipseElement.attributes.ry);
    return `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${
      cx + rx
    } ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;
  }

  private static extractLinePathData(lineElement: INode): string {
    const x1 = parseFloat(lineElement.attributes.x1);
    const y1 = parseFloat(lineElement.attributes.y1);
    const x2 = parseFloat(lineElement.attributes.x2);
    const y2 = parseFloat(lineElement.attributes.y2);
    return `M${x1} ${y1} L${x2} ${y2}`;
  }

  private static extractPolylinePathData(polylineElement: INode): string {
    const points = polylineElement.attributes.points;
    return `M${points} L${points}`;
  }

  private static extractPolygonPathData(polygonElement: INode): string {
    const points = polygonElement.attributes.points;
    return `M${points} Z`;
  }
}
