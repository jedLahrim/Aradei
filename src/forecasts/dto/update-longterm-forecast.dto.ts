import { Field, InputType } from '@nestjs/graphql';
import { UnitsForecastsDto } from './update-units-forecasts.dto';

@InputType()
export class UpdateLongtermForecastDto {
  @Field()
  id?: string;
  @Field()
  retailCenterId?: string;
  @Field()
  retailCenterStatus?: string;
  @Field((type) => [UnitsForecastsDto], { nullable: true })
  unitsForecasts?: UnitsForecastsDto[];
}
