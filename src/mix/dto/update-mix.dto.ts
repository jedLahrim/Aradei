import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateMixDto {
  @Field((returns) => Int)
  id: number;
  @Field()
  alias: string;
  @Field((returns) => Int)
  mixCategoryId: number;
}
