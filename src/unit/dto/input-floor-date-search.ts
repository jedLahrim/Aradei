import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InputUnitFloorAndDateSearch {
  @Field({ nullable: true })
  floorId?: string;
  @Field()
  dateFrom: Date;
  @Field()
  dateTo: Date;
}
