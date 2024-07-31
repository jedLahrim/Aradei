import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RenewBookingDto {
  @Field()
  parentBookingId: string;
  @Field()
  dateFrom: Date;
  @Field()
  dateTo: Date;
  @Field({ nullable: true })
  notes?: string;
  @Field({ nullable: true })
  surface?: number;
  @Field({ nullable: true })
  monthPrice?: number;
  @Field({ nullable: true })
  dataObj?: string;
}
