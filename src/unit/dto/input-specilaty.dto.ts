import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class inputSpecialty {
  @Field({ nullable: true })
  id: number;
}
