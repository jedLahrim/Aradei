import { Field, ObjectType } from '@nestjs/graphql';
import { Permission } from './permission.entity';
import { UserProfile } from './userProfile.entity';

@ObjectType()
export class UserRole {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  title: string;
  @Field((type) => [UserProfile])
  users?: UserProfile[];
  @Field((type) => [Permission], { nullable: true })
  Permissions?: Permission[];
}
