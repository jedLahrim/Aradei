import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateConventionDto {
  @Field()
  bookingId: string;
  @Field()
  html: string;
}
