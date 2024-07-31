import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyGroupDto {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => [String], { nullable: true })
  companyIds?: string[];
}
