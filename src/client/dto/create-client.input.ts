import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field()
  clintId: string;
}
