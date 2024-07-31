import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from './unit.entity';
import { RetailCenter } from 'src/retailCenter/entities/retailcenter.entity';
import { Brand } from 'src/brand/entities/brand.entity';

@ObjectType()
export class Picture {
  @Field()
  id: string;
  @Field()
  filePath: string;
  @Field((type) => Unit, { nullable: true })
  unit?: Unit;
  @Field((type) => RetailCenter, { nullable: true })
  retailCenter?: RetailCenter;
  @Field((type) => Brand, { nullable: true })
  brand?: Brand;
}
