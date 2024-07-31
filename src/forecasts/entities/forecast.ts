import { Field, ObjectType } from '@nestjs/graphql';
import { MonthlyForecasts } from './monthly.forecasts';
import { LongtermForecasts } from './longterm.forecasts';

@ObjectType()
export class Forecast {
  @Field()
  id: number;
  @Field()
  name?: string;
  @Field()
  createdAt?: Date;
  @Field()
  year?: Date;
  @Field()
  type?: string;
  @Field((type) => [MonthlyForecasts], { nullable: true })
  monthlyForecasts?: MonthlyForecasts[];
  @Field((type) => [LongtermForecasts], { nullable: true })
  longtermForecasts?: LongtermForecasts[];
}
