import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PrismaModule } from '../../prisma.module';
import { UploadPictureController } from './pictures.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UploadPictureController],
  providers: [PicturesService],
})
export class PicturesModule {}
