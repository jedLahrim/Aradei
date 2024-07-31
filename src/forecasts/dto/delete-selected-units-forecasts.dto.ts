import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class deleteSelectedUnitsForecastsDto {
  @Field((returns) => Int)
  id: number;
  @Field((returns) => String, { nullable: true })
  name?: string;
  @Field(() => [String], { nullable: true })
  filtredAssets?: string[];
  @Field(() => [String], { nullable: true })
  filtredUnits?: string[];
}
