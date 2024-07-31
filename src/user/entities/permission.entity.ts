import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Permission {
  @Field()
  id: number;
  @Field()
  action: string;
  @Field()
  subject: string;
}
