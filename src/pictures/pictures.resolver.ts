import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PictureService } from './pictures.service';
import { UseGuards } from '@nestjs/common';
import { Picture } from 'src/unit/entities/picture.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateBulkPictureDto } from './dto/createPicture.dto';

@Resolver()
export class PictureResolver {
  constructor(private pictureService: PictureService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [Picture])
  async createPictures(@Args('data') data: CreateBulkPictureDto) {
    return this.pictureService.createPictures(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async removePicture(@Args('id') id: string) {
    return this.pictureService.removePicture(id);
  }
}
