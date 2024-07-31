import { Field, ObjectType } from '@nestjs/graphql';
import { Brand } from 'src/brand/entities/brand.entity';
import { Unit } from 'src/unit/entities/unit.entity';
import { MixCategory } from './mixCategory.entity';

@ObjectType()
export class Mix {
  @Field()
  id: number;
  @Field()
  alias: string;
  @Field((type) => [Unit])
  units?: Unit[];
  @Field((type) => [Brand])
  brands?: Brand[];
  @Field((type) => MixCategory, { nullable: true })
  MixCategory?: MixCategory;
}
