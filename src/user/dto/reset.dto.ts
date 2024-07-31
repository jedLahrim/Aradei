import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ResetDto {
  @Field()
  userId: string;
  @Field()
  password: string;
}
