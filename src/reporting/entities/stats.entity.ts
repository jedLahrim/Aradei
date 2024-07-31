import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class EntityStats {
  @Field()
  today: number;

  @Field()
  total: number;
}

@ObjectType()
export class Stats {
  @Field(() => EntityStats)
  leads: EntityStats;
  @Field(() => EntityStats)
  deals: EntityStats;
  @Field(() => EntityStats)
  bookings: EntityStats;
  @Field(() => EntityStats)
  expirations: EntityStats;
}
