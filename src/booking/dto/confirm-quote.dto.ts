import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConfirmQuoteDto {
  @Field()
  proposalId: string;
  @Field({ nullable: true })
  quoteId?: string | null;
  @Field({ nullable: true })
  signedQuoteFilePath?: string;
  @Field({ nullable: true })
  paiementQuoteFilePath?: string;
  @Field({ nullable: true })
  purchasedOrderFilePath?: string;
  @Field({ nullable: true })
  signedGeneralConditionsFilePath?: string;
}
