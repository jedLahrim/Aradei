import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLeadRelationsDto {
  @Field({ nullable: true })
  contactId?: string;
  @Field({ nullable: true })
  brandId?: string;
  @Field({ nullable: true })
  groupId?: string;
  @Field({ nullable: true })
  companyId?: string;
}
