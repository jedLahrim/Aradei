import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GlobalStats {
  @Field()
  grandTotalUnits: number;
  @Field()
  specialtyUnitsRented: number;
  @Field()
  longTermUnitsAvailable: number;
  @Field()
  specialtyUnitsAvailable: number;
  @Field()
  longTermUnitsRented: number;
  @Field()
  grandTotalUnitsRented: number;
  @Field((type) => [String])
  mixesLabels: string[];
  @Field((type) => [Number])
  rentedPerMix: string[];
  @Field((type) => [String])
  ccsLabels: string[];
  @Field((type) => [Number])
  totaOccupancyPerCc: string[];
}
