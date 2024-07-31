import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMixCategoryDto {
  @Field()
  alias: string;
}
