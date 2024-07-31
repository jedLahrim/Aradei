import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetTeamDto {
  @Field({ nullable: true })
  roleId?: number;
}
