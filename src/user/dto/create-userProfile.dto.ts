import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserProfileDto {
  @Field({ nullable: true })
  fromContactId?: string;
  @Field()
  email: string;
  @Field()
  name: string;
  @Field()
  jobTitle: string;
  @Field()
  firstName: string;
  @Field({ nullable: true })
  picture?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  mobilePhone?: string;
  @Field()
  roleId: number;
  @Field({ nullable: true })
  userId?: string;
  @Field(() => [String])
  retailCenters?: string[];
}
