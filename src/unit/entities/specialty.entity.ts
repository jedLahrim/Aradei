import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from './unit.entity';

@ObjectType()
export class Specialty {
  @Field()
  id: number;
  @Field()
  alias: string;
  @Field(() => [Unit])
  units: Unit[];
}
