import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserRoleDto {
  @Field()
  id: number;
  @Field((type) => [Number], { nullable: true })
  permissions?: number[];
}
