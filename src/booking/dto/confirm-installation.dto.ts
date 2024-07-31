import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConfirmInstallationDto {
  @Field()
  proposalId: string;
  @Field({ nullable: true })
  documentId?: string | null;
  @Field()
  signedInstallationFilePath: string;
}
