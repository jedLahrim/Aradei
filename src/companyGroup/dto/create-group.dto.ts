import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCompanyGroupDto {
  @Field()
  name: string;
  @Field({ nullable: true })
  companyId?: string;
}
