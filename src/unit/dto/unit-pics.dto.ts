import { Field, InputType } from '@nestjs/graphql';
import { PictureDto } from './picture.dto';

@InputType()
export class setUnitPicsDto {
  @Field({ nullable: true })
  unitId?: string;
  @Field({ nullable: true })
  retailCenterId?: string;
  @Field((type) => [PictureDto])
  pics: PictureDto[];
}
