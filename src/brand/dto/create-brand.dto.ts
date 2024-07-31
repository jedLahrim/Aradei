import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBrandDto {
  @Field()
  name: string;
  @Field({ nullable: true })
  logo?: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  products?: string;
  @Field({ nullable: true })
  companyId?: string;
  @Field(() => Number, { nullable: true })
  mixId?: number;
  @Field(() => [String], { nullable: true })
  pictures?: string[];
}
