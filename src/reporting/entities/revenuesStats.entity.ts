import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RevenuesStats {
  @Field()
  totalLongTermRevenue: number;
  @Field()
  totalSpecialtyRevenue: number;
  @Field()
  totalMediaRevenue: number;
  @Field()
  total: number;
}

@ObjectType()
export class MonthRevenuesStats {
  @Field(() => [Number])
  currentMonthsGroup: number[];
  @Field(() => [Number])
  previousMonthsGroup: number[];
}

@ObjectType()
export class SpecialtyRevenuesStats {
  @Field(() => [Number])
  temporaryRevenues: number[];
  @Field(() => [Number])
  mediaRevenues: number[];
}

@ObjectType()
export class SpecialtyRevenueStats {
  @Field(() => Number)
  temporaryRevenues: number;
  @Field(() => Number)
  mediaRevenues: number;
}

@ObjectType()
export class LeasingTimeStats {
  @Field(() => Number)
  days: number;
  @Field(() => Number)
  count: number;
}

@ObjectType()
export class TotalByEntityStats {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => Number)
  total: number;
}

@ObjectType()
export class CountByEntityStats {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => Number)
  count: number;
}

@ObjectType()
export class EvolutionByEntityStats {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => Number)
  evolution: number;
}

@ObjectType()
export class ReportingStats {
  @Field(() => SpecialtyRevenuesStats)
  SpecialtyLeasingPerformance: SpecialtyRevenuesStats;
  @Field(() => [LeasingTimeStats])
  AverageLeasingTime: LeasingTimeStats[];
  @Field(() => [TotalByEntityStats])
  TurnoverByAsset: TotalByEntityStats[];
  @Field(() => [CountByEntityStats])
  SpecialtyDeals: CountByEntityStats[];
  @Field(() => [TotalByEntityStats])
  TurnoverByMix: TotalByEntityStats[];
  @Field(() => SpecialtyRevenueStats)
  RevenueStandVSMedia: SpecialtyRevenueStats;
  @Field(() => [TotalByEntityStats])
  RevenueStand: TotalByEntityStats[];
  @Field(() => [TotalByEntityStats])
  RevenueMedia: TotalByEntityStats[];
  @Field(() => [EvolutionByEntityStats])
  RevenueStandsEvolution: EvolutionByEntityStats[];
  @Field(() => [EvolutionByEntityStats])
  RevenueMediaEvolution: EvolutionByEntityStats[];
}
