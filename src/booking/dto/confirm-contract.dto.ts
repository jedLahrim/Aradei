import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConfirmContractDto {
  @Field()
  proposalId: string;
  @Field()
  documentId: string;
  @Field({ nullable: true })
  signedContractFilePath?: string;
  @Field({ nullable: true })
  paiementContractFilePath?: string;
}
