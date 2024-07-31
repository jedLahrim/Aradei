import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from './unit.entity';

@ObjectType()
export class Category {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field((type) => Unit)
  units?: Unit[];
}
