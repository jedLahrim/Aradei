import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  destinationPath,
  editFileName,
  imageFileFilter,
} from '../../utils/file-uploading.utils';
import { FileService } from './file.service';

@Controller('upload')
export class UploadController {
  constructor(private fileService: FileService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: destinationPath,
        filename: editFileName,
      }),
      limits: {
        fileSize: 100000000, // 100 MB
      },
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file, @Body() body) {
    return this.fileService.uploadedFile(file, body);
  }
}
