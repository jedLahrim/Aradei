import { RetailCenter } from '../../retailCenter/entities/retailcenter.entity';
import { Floor } from '../../floor/entities/floor.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommercialDocument {
  @Field({ nullable: true })
  id?: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  type?: string;
  @Field()
  filePath: string;
  @Field((type) => RetailCenter, { nullable: true })
  RetailCenter?: RetailCenter | null;
  @Field((type) => Floor, { nullable: true })
  Floor?: Floor | null;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}
