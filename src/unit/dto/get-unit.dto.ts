import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUnitDto {
  @Field()
  unitId: string;
}
