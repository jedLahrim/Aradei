import { Unit } from './unit.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UnitList {
  @Field((type) => [Unit])
  units: Unit[];
  @Field()
  totalUnits: number;

  constructor(units: Unit[], totalUnits: number) {
    this.units = units;
    this.totalUnits = totalUnits;
  }
}
