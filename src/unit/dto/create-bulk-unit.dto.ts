import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBulkUnitListDto {
  @Field((type) => [CreateBulkUnitDto])
  units: CreateBulkUnitDto[];
}

@InputType()
export class CreateBulkUnitDto {
  @Field()
  unitId: string;
  @Field()
  floorId: string;
  @Field()
  alias: string;
  @Field()
  surface: number;
  @Field()
  rentType: number;
  @Field({ nullable: true })
  mainPicture?: string;
}
