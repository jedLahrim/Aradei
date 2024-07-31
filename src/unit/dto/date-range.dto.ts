import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DateRange {
  @Field()
  dateFrom: Date;
  @Field()
  dateTo: Date;
}
