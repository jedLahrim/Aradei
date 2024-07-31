import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendResetDto {
  @Field()
  email: string;
}
