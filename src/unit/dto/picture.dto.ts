import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PictureDto {
  @Field()
  filePath: string;
}
