import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserRoleDto {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  title: string;
}
