import { Field, ObjectType } from '@nestjs/graphql';
import { RetailCenter } from '../../retailCenter/entities/retailcenter.entity';

@ObjectType()
export class MonthlyForecasts {
  @Field()
  id?: string;
  @Field()
  january: string;
  @Field()
  february: string;
  @Field()
  march: string;
  @Field()
  april: string;
  @Field()
  may: string;
  @Field()
  june: string;
  @Field()
  july: string;
  @Field()
  august: string;
  @Field()
  september: string;
  @Field()
  october: string;
  @Field()
  november: string;
  @Field()
  december: string;
  @Field()
  retailCenterId?: string;
  @Field((type) => RetailCenter)
  retailCenter?: RetailCenter;
}
