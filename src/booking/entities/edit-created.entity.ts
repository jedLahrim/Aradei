import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatedEdit {
  @Field()
  count: number;
}
