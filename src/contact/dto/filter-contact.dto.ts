import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FilterContactDto {
  @Field({ nullable: true })
  status?: number;
  @Field({ nullable: true })
  companyId?: string;
  @Field({ nullable: true })
  contactId?: string;
}
