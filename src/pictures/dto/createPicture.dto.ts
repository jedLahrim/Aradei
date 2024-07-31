import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePictureDto {
  @Field()
  filePath: string;
  @Field((type) => String, { nullable: true })
  unitId?: string;
  @Field((type) => String, { nullable: true })
  brandId?: string;
  @Field((type) => String, { nullable: true })
  retailCenterId?: string;
}

@InputType()
export class CreateBulkPictureDto {
  @Field(() => [CreatePictureDto])
  pictures: CreatePictureDto[];
}
