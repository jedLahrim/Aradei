import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UnitAttachedCount {
  @Field()
  bookings: number;
  @Field()
  negos: number;
  @Field()
  documents: number;
}
