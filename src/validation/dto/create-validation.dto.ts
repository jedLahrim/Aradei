import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateValidationDto {
  @Field()
  kindId: number;
  @Field({ nullable: true })
  bookingId?: string;
  @Field({ nullable: true })
  documentId?: string;
  @Field({ nullable: true })
  mediaProposalId?: string;
  @Field({ nullable: true })
  documentLink?: string;
    @Field({ nullable: true })
    quoteId?: string;
}
