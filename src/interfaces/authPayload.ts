import { UserProfile } from '../user/entities/userProfile.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthPayload {
  @Field()
  token?: string;
  @Field()
  user?: UserProfile;
}
