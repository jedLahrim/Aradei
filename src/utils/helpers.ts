import { INode } from 'svgson';
import axios from 'axios';
import { Unit } from 'src/unit/entities/unit.entity';
import { SVGPathExtractor } from './SVGManager/SVGPathExtractor';
import { getSVGBbox } from './SVGManager/SVGBBox';

export function isBooked(unit: Unit) {
  const currDate = new Date();
  if (unit.bookings.length === 0) return false;
  const booking = unit.bookings[unit.bookings.length - 1];

  return Boolean(
    booking &&
      (booking.status === 3 ||
        booking.signedAt ||
        booking.contractComplete === true),
  );
}

export function getBBox(child: INode) {
  if (child.name === 'rect') {
    return {
      x1: parseFloat(child.attributes.x),
      y1: parseFloat(child.attributes.y),
      x2: parseFloat(child.attributes.x) + parseFloat(child.attributes.width),
      y2: parseFloat(child.attributes.y) + parseFloat(child.attributes.height),
      boxWidth: parseFloat(child.attributes.width),
      boxHeight: parseFloat(child.attributes.height),
      centerX:
        parseFloat(child.attributes.x) + parseFloat(child.attributes.width) / 2,
      centerY:
        parseFloat(child.attributes.y) +
        parseFloat(child.attributes.height) / 2,
    };
  }
  if (child.name === 'circle') {
    return {
      x1: parseFloat(child.attributes.cx) - parseFloat(child.attributes.cr),
      y1: parseFloat(child.attributes.cy) - parseFloat(child.attributes.cr),
      x2: parseFloat(child.attributes.cx) + parseFloat(child.attributes.cr),
      y2: parseFloat(child.attributes.cy) + parseFloat(child.attributes.cr),
      boxWidth: parseFloat(child.attributes.cr) * 2,
      boxHeight: parseFloat(child.attributes.cr) * 2,
      centerX: parseFloat(child.attributes.cx),
      centerY: parseFloat(child.attributes.cy),
    };
  }
  const dPath = SVGPathExtractor.getPathData(child);
  const [x1, y1, x2, y2] = getSVGBbox(dPath);
  const boxWidth = x2 - x1;
  const boxHeight = y2 - y1;
  const centerX = x1 + boxWidth / 2;
  const centerY = y1 + boxHeight / 2;

  return {
    x1,
    y1,
    x2,
    y2,
    boxWidth,
    boxHeight,
    centerX,
    centerY,
  };
}

export async function avatarText(
  value: string,
  size = 38,
  bgColor = '001a3f',
  color = 'FFF',
) {
  if (!value) return '';
  const nameArray = value.split(' ');

  const letters = nameArray
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  const fileURL = `https://placehold.co/${size}x${size}/${bgColor.replaceAll(
    '#',
    '',
  )}/${color.replaceAll('#', '')}?text=${letters}`;

  const response = await axios.get(fileURL, {
    responseType: 'arraybuffer',
  });

  return (
    'data:image/svg+xml;base64,' +
    Buffer.from(response.data, 'binary').toString('base64')
  );
}

export function stringToColor(string: string, saturation = 85, lightness = 60) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return `hsl(${hash % 360}, ${saturation}%, ${lightness}%)`;
}
