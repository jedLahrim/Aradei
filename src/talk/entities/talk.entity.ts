import { UserProfile } from '../../user/entities/userProfile.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { Document } from '../../document/entities/document.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Talk {
  @Field()
  id: string;
  @Field((type) => Booking, { nullable: true })
  booking?: Partial<Booking>;
  @Field((type) => Document, { nullable: true })
  document?: Document;
  @Field((type) => UserProfile)
  from?: UserProfile;
  @Field((type) => UserProfile, { nullable: true })
  to?: UserProfile;
  @Field((type) => Date)
  createdAt: Date;
  @Field()
  content: string;
}
