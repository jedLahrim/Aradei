import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateMixCategoryDto {
  @Field((returns) => Int)
  id: number;
  @Field()
  alias: string;
}
