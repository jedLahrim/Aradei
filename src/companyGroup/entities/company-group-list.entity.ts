import { Field, ObjectType } from '@nestjs/graphql';
import { CompanyGroup } from './company-group.entity';

@ObjectType()
export class CompanyGroupList {
  @Field(() => [CompanyGroup])
  companyGroups: CompanyGroup[];
  @Field()
  total: number;

  constructor(companyGroups: CompanyGroup[], total: number) {
    this.companyGroups = companyGroups;
    this.total = total;
  }
}
