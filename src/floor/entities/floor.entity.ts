import { Unit } from '../../unit/entities/unit.entity';
import { Document } from '../../document/entities/document.entity';
import { RetailCenter } from '../../retailCenter/entities/retailcenter.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { CommercialDocument } from 'src/document/entities/commercialDoc.entity';
@ObjectType()
export class Floor {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field((type) => [Unit])
  units?: Unit[];
  @Field((type) => [Document])
  documents?: Document[];
  @Field((type) => RetailCenter)
  retailCenter?: RetailCenter;
  @Field()
  retailCenterId: string;
  @Field()
  svgBluePrint: string;
  @Field((type) => [CommercialDocument])
  commercialDocs?: CommercialDocument[];
}
