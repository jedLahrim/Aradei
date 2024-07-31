import { extname } from 'path';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { existsSync, mkdirSync } from 'fs';
import { Request } from 'express';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(pdf|csv|jpg|jpeg|png|svg|docx|doc)$/)) {
    return callback(
      new Error('Only pdf|csv|jpg|jpeg|png|svg files are allowed!'),
      false,
    );
  }
  callback(null, true);
};

export function getFilename(file): string {
  const name = uuidv4();
  const fileExtName = extname(file.originalname);
  return `${name}${fileExtName}`;
}

export const editFileName = (
  req: Request,
  file,
  callback: (error: Error | null, destination: string) => void,
) => {
  const filename = getFilename(file);
  callback(null, filename);
};

export function getDir(req: Request): string {
  //callback(null, `./uploads/${getUserId}/${req.query.t}`);
  let dir: string = req.query.t ?? req.body.type;
  if (dir.startsWith('TECHNICAL')) {
    dir = 'technical';
  } else if (dir.startsWith('LEGAL')) {
    dir = 'legal';
  }
  if (dir === 'commercialDocs' && !existsSync(`./uploads/${dir}`)) {
    mkdirSync(`./uploads/${dir}`);
  }
  mkdirSync(`./uploads/${dir}`, { recursive: true });
  return dir;
}

export const destinationPath = (
  req: Request,
  file,
  callback: (error: Error | null, destination: string) => void,
) => {
  try {
    const dir = getDir(req);
    callback(null, `./uploads/${dir}`);
  } catch (e) {
    console.error(e);
    const defaultDir = `./uploads/default`;
    mkdirSync(defaultDir, { recursive: true });
    callback(null, defaultDir);
  }
};
