import { Booking } from './booking.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookingList {
  @Field(() => [Booking])
  bookings: Booking[];
  @Field()
  totalBookings: number;

  constructor(bookings: Booking[], totalBookings: number) {
    this.bookings = bookings;
    this.totalBookings = totalBookings;
  }
}
