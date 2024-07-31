import { CreateHistoryInput } from './create-history.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHistoryInput extends PartialType(CreateHistoryInput) {
  @Field(() => Int)
  id: number;
}
