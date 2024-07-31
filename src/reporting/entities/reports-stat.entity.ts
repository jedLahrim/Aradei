import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CountNewField {
  @Field()
  count: number;
  @Field()
  new: number;
}

@ObjectType()
export class TotalCountField {
  @Field()
  total: number;
  @Field()
  count: number;
}

@ObjectType()
export class ReportsStats {
  @Field(() => CountNewField)
  leads: CountNewField;
  @Field(() => TotalCountField)
  hots: TotalCountField;
  @Field(() => TotalCountField)
  contracts: TotalCountField;
  @Field(() => TotalCountField)
  deals: TotalCountField;
  @Field(() => TotalCountField)
  bookings: TotalCountField;
  @Field()
  expirations: number;
}
