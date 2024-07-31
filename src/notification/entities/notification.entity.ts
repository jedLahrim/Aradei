import { Field, ObjectType } from '@nestjs/graphql';
import { UserRole } from '../../user/entities/userRole.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { UserProfile } from '../../user/entities/userProfile.entity'; // Import UserProfile

@ObjectType()
export class Notification {
  @Field()
  id: string;
  @Field()
  type: string;
  @Field()
  message: string;
  @Field((type) => Booking, { nullable: true })
  booking: Booking | null;
  @Field()
  date: Date;
  @Field()
  isRead: boolean;
  @Field((type) => [UserProfile], { nullable: true })
  users: UserProfile[];
  @Field((type) => [UserProfile], { nullable: true })
  readers: UserProfile[];
}
