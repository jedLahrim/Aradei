import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from './unit.entity';
import { Floor } from 'src/floor/entities/floor.entity';

@ObjectType()
export class UnitLogoMetadata {
  @Field()
  id: string;
  @Field((type) => String)
  unitId: string;
  @Field((type) => Unit, { nullable: true })
  unit?: Unit;
  @Field((type) => String)
  floorId: string;
  @Field((type) => Floor, { nullable: true })
  floor?: Floor;
  @Field()
  x: number;
  @Field()
  y: number;
  @Field()
  rotation: number;
  @Field()
  width: number;
  @Field()
  height: number;
  @Field()
  scale: number;
  @Field((type) => String, { nullable: true })
  logo?: string;
}
