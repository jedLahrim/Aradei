import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConfirmHOTDto {
  @Field()
  proposalId: string;
  @Field({ nullable: true })
  documentId?: string | null;
  @Field()
  signedHOTFilePath: string;
}
