import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from './unit.entity';

@ObjectType()
export class Feature {
  @Field()
  id: number;
  @Field()
  alias: string;
  @Field((type) => [Unit], { nullable: true })
  units?: Unit[];
}
