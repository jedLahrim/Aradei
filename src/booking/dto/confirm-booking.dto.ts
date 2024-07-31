import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConfirmBookingDto {
  @Field()
  id: string;
  @Field()
  unitId: string;
}
