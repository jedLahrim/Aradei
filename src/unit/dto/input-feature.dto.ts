import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class inputFeature {
  @Field({ nullable: true })
  id: number;
}
