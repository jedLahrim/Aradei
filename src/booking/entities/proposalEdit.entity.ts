import { Field, ObjectType } from '@nestjs/graphql';
import { UserProfile } from 'src/user/entities/userProfile.entity';
import { Booking } from './booking.entity';

@ObjectType()
export class ProposalEdit {
  @Field()
  id: string;
  @Field()
  unitSurface: number;
  @Field()
  unitId: string;
  @Field()
  unitPrice: number;
  @Field((type) => UserProfile)
  creator?: UserProfile;
  @Field()
  createdAt: Date;
  @Field((type) => Booking)
  booking?: Booking;
}
