import { Field, InputType } from '@nestjs/graphql';
import { CompanyType } from 'src/utils/enums/lead.enum';

@InputType()
export class UpdateCompanyDto {
  @Field()
  companyId: string;
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  managerName?: string;
  @Field({ nullable: true })
  managerID?: string;
  @Field({ nullable: true })
  managerPosition?: string;
  @Field({ nullable: true })
  managerTitle?: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  type?: CompanyType;
  @Field({ nullable: true })
  address?: string;
  @Field({ nullable: true })
  city?: string;
  @Field({ nullable: true })
  zip?: string;
  @Field({ nullable: true })
  country?: string;
  @Field({ nullable: true })
  region?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  web?: string;
  @Field({ nullable: true })
  tva?: string;
  @Field({ nullable: true })
  rc?: string;
  @Field({ nullable: true })
  cityRC?: string;
  @Field({ nullable: true })
  ice?: string;
  @Field({ nullable: true })
  capital?: string;
  @Field({ nullable: true })
  instagram?: string;
  @Field({ nullable: true })
  linkedIn?: string;
  @Field({ nullable: true })
  patente?: string;
  @Field({ nullable: true })
  taxIF?: string;
  @Field({ nullable: true })
  mainColor?: string;
  @Field({ nullable: true })
  bgBanner?: string;
  @Field({ nullable: true })
  customerCode?: string;
}
