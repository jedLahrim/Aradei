import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class UnitStatsEntry {
  @Field()
  rentType: number;

  @Field()
  booked: number;

  @Field()
  total: number;
}

@ObjectType()
export class UnitStats {
  @Field(() => [UnitStatsEntry])
  stats: UnitStatsEntry[];
  @Field()
  totalBooked: number;
  @Field()
  totalUnits: number;
}
