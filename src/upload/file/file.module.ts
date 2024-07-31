import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { UploadController } from './file.controller';
import { PrismaModule } from '../../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UploadController],
  providers: [FileService],
})
export class FileModule {}
