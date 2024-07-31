import { Field, InputType } from '@nestjs/graphql';
import { ProposalEditDto } from './proposalEdit.dto';

@InputType()
export class CreateEditDto {
  @Field()
  bookingId: string;
  @Field({ nullable: true })
  notes?: string;
  @Field((type) => [ProposalEditDto])
  edits?: ProposalEditDto[];
}
