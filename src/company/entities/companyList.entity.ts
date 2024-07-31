import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from './company.entity';

@ObjectType()
export class CompanyList {
  @Field((type) => [Company])
  companies: Company[];
  @Field()
  totalCompanies: number;

  constructor(companies: Company[], totalCompanies: number) {
    this.companies = companies;
    this.totalCompanies = totalCompanies;
  }
}
