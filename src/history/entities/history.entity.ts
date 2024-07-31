import { Field, ObjectType } from '@nestjs/graphql';
import { UserProfile } from '../../user/entities/userProfile.entity';
import { Contact } from '../../contact/entities/contact.entity';
import { Unit } from '../../unit/entities/unit.entity';
import { Booking } from '../../booking/entities/booking.entity';

@ObjectType()
export class History {
  @Field()
  id: string;
  @Field()
  action: string;
  @Field(() => Contact, { nullable: true })
  contact?: Contact;
  @Field(() => Unit, { nullable: true })
  unit?: Unit;
  @Field(() => Booking, { nullable: true })
  booking?: Booking;
  @Field({ nullable: true })
  documentHistoryId?: string;
  @Field(() => UserProfile)
  creator?: UserProfile;
  @Field()
  createdAt: Date;
}
