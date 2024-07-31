import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserProfileDto {
  @Field()
  userId: string;
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
  phone: string;
  @Field({ nullable: true })
  mobilePhone: string;
  @Field()
  roleId: number;
  @Field(() => [String])
  retailCenters?: string[];
}
