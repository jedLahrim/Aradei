import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddLogoDto {
  @Field()
  floorId: string;
  @Field()
  html: string;
}
