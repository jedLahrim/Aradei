import { Field, ObjectType } from '@nestjs/graphql';
import { Picture } from './picture.entity';
import { Unit } from './unit.entity';

@ObjectType()
export class UnitGroup {
  @Field()
  id: string;
  @Field((type) => [Picture], { nullable: true })
  Units?: Unit[];
}
