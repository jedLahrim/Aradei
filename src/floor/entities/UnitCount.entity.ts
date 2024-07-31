import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UnitCount {
  @Field()
  units: number;
}
