import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePlanDto {
  @Field()
  floorId: string;
  @Field()
  unitId: string;
  @Field()
  tagName: string;
  @Field()
  class: string;
  @Field({ nullable: true })
  cx?: string;
  @Field({ nullable: true })
  cy?: string;
  @Field({ nullable: true })
  r?: string;
  @Field({ nullable: true })
  x?: string;
  @Field({ nullable: true })
  y?: string;
  @Field({ nullable: true })
  width?: string;
  @Field({ nullable: true })
  height?: string;
}
