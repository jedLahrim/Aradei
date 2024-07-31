import { Field, InputType } from '@nestjs/graphql';

@InputType()
class UnitLogoMetadataDto {
  @Field((type) => String, { nullable: true })
  id?: string;
  @Field((type) => String)
  unitId: string;
  @Field((type) => String)
  floorId: string;
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

@InputType()
export class BulkUnitLogoMetadataDto {
  @Field((type) => [UnitLogoMetadataDto])
  placeholders: UnitLogoMetadataDto[];
}
