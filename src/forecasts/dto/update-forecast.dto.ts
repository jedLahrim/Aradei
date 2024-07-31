import { Field, InputType, Int } from '@nestjs/graphql';
import { UpdateMonthlyForecastDto } from './update-monthly-forecast.dto';
import { UpdateLongtermForecastDto } from './update-longterm-forecast.dto';

@InputType()
export class UpdateForecastDto {
  @Field((returns) => Int)
  id: number;
  @Field()
  name?: string;
  @Field((type) => [UpdateMonthlyForecastDto], { nullable: true })
  monthlyForecasts?: UpdateMonthlyForecastDto[];
  @Field((type) => [UpdateLongtermForecastDto], { nullable: true })
  longtermForecasts?: UpdateLongtermForecastDto[];
}
