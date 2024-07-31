import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { PicturesService } from './pictures.service';
import { Request } from 'express';
import { getDir } from '../../utils/file-uploading.utils';
import path from 'path';
import * as crypto from 'crypto';

@Controller('uploadPicture')
export class UploadPictureController {
  constructor(private picturesService: PicturesService) {}

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async uploadedFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
    @Req() req: Request,
  ) {
    files.forEach((file) => {
      file.path = getDir(req);
      const { name } = path.parse(file.originalname);
      file.filename = `${crypto.randomUUID()}${name}`;
    });
    return this.picturesService.uploadedFiles(files, body);
  }
}
