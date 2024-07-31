import { Field, ObjectType } from '@nestjs/graphql';
import { UserProfile } from 'src/user/entities/userProfile.entity';
import { Booking } from './booking.entity';
import { Quote } from './quote.entity';

@ObjectType()
export class BookingEdit {
  @Field()
  id: string;
  @Field()
  bookingId: string;
  @Field({ nullable: true })
  quoteId?: string | null;
  @Field()
  type: number;
  @Field((type) => Booking)
  booking: Booking;
  @Field()
  unitSurface: number;
  @Field()
  unitId: string;
  @Field()
  unitPrice: number;
  @Field((type) => UserProfile)
  creator: UserProfile;
  @Field({ nullable: true })
  quote?: Quote;
  @Field()
  createdAt: Date;
}
