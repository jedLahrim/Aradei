import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUnitLogoMetadataDto {
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
