import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateValidationKindDto {
  @Field()
  id: number;

  @Field(() => [Number], { nullable: true })
  rolesNeeded?: number[];
}
