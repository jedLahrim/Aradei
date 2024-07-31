import { Field, ObjectType } from '@nestjs/graphql';
import { RetailCenter } from '../../retailCenter/entities/retailcenter.entity';
import { UnitsForecasts } from './units.forecasts';

@ObjectType()
export class LongtermForecasts {
  @Field()
  id?: string;
  @Field()
  retailCenterId?: string;
  @Field({ nullable: true })
  retailCenterStatus?: string;
  @Field((type) => RetailCenter, { nullable: true })
  retailCenter?: RetailCenter;
  @Field((type) => [UnitsForecasts], { nullable: true })
  unitsForecasts?: UnitsForecasts[];
}
