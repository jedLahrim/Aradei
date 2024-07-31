import { Field, InputType, Int } from '@nestjs/graphql';
import { CompanyType, LeadSource } from 'src/utils/enums/lead.enum';

@InputType()
export class CreateCompanyDto {
  @Field({ nullable: true })
  groupId?: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  address?: string;
  @Field({ nullable: true })
  ice?: string;
  @Field({ nullable: true })
  city?: string;
  @Field({ nullable: true })
  country?: string;
  @Field({ nullable: true })
  region?: string;
  @Field()
  phone: string;
  @Field()
  email: string;
  @Field((returns) => Int)
  type: CompanyType;
  @Field({ nullable: true })
  zip?: string;
  @Field({ nullable: true })
  request?: string;
  @Field({ nullable: true })
  source?: LeadSource;
  @Field({ nullable: true })
  bgBanner?: string;
  @Field({ nullable: true })
  customerCode?: string;
}
