import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FloorCount {
  @Field()
  floors: number;
  @Field()
  documents: number;
}
