import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateMonthlyForecastDto {
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
}
