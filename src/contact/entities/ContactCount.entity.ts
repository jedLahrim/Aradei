import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ContactCount {
  @Field()
  contacts: number;
}
