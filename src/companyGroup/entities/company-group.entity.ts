import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';

@ObjectType()
export class CompanyGroup {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  createdAt: Date;
  @Field(() => [Company], { nullable: true })
  companies?: Company[];
}
