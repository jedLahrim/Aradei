import { Field, InputType } from '@nestjs/graphql';

@InputType()
class BookingUnitData {
  @Field()
  id: string;
  @Field()
  unitId: string;
  @Field()
  surface: number;
  @Field()
  price: number;
}

@InputType()
export class CreateManualBookingDto {
  @Field()
  brandId: string;
  @Field()
  companyId: string;
  @Field()
  contactId: string;
  @Field(() => BookingUnitData)
  unit: BookingUnitData;
  @Field()
  dateFrom: Date;
  @Field()
  dateTo: Date;
  @Field()
  type: string;
}

@InputType()
export class UpdateManualBookingDto {
  @Field()
  id: string;
  @Field()
  brandId: string;
  @Field()
  companyId: string;
  @Field()
  contactId: string;
  @Field(() => BookingUnitData)
  unit: BookingUnitData;
  @Field()
  dateFrom: Date;
  @Field()
  dateTo: Date;
  @Field()
  type: string;
}
