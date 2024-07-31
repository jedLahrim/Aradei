import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCompanyProspectDto {
  @Field()
  city: string;
  @Field()
  phone: string;
  @Field()
  email: string;
  @Field()
  type: number;
  @Field()
  managerName: string;
  @Field()
  name: string;
  @Field()
  duration: number;
  @Field()
  surface: number;
  @Field()
  kind: number;
  @Field({ nullable: true })
  logo?: string;
  @Field()
  source: string;
  @Field()
  description: string;
  @Field({ nullable: true })
  message?: string;
  companyId?: number;
}
