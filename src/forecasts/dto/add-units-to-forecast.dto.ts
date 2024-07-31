import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class addUnitsToForecastDto {
  @Field((returns) => Int)
  id: number;
  @Field()
  name?: string;
  @Field(() => [String], { nullable: true })
  addedUnits?: string[];
}
