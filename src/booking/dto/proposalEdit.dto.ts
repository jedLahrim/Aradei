import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProposalEditDto {
  @Field()
  unitId: string;
  @Field()
  unitSurface: number;
  @Field()
  unitPrice: number;
}
