import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateMixDto {
  @Field()
  alias: string;
  @Field((returns) => Int)
  mixCategoryId: number;
}
