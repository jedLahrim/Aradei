import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StatCount {
  @Field()
  floors: number;
  @Field()
  documents: number;
}
