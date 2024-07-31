import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUnitsLogoMetadataDto {
  @Field((type) => String, { nullable: true })
  unitId?: string;
  @Field((type) => String, { nullable: true })
  floorId?: string;
}
