import { Field, InputType } from '@nestjs/graphql';
import { ProposalEditDto } from './proposalEdit.dto';

@InputType()
export class CreateBookingDto {
  @Field()
  contactId: string;
  @Field()
  brandId: string;
  @Field()
  companyId: string;
  @Field(() => [String])
  units: string[];
  @Field()
  type: string;
  @Field()
  dateFrom: Date;
  @Field()
  dateTo: Date;
  @Field({ nullable: true })
  notes?: string;
  @Field((type) => [ProposalEditDto], { nullable: true })
  proposalEdits?: ProposalEditDto[];
  @Field({ nullable: true })
  dataObj?: string;
  @Field({ nullable: true })
  parentBookingId?: string;
}
