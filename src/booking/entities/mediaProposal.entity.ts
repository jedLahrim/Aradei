import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from 'src/unit/entities/unit.entity';
import { UserProfile } from 'src/user/entities/userProfile.entity';
import { Booking } from './booking.entity';
import { Media } from './media.entity';
import { Validation } from 'src/validation/entities/validation.entity';

@ObjectType()
export class MediaProposal {
  @Field()
  id: string;
  @Field((type) => UserProfile)
  creator: UserProfile;
  @Field((type) => Booking, {nullable: true})
  booking?: Booking | null;
  @Field((type) => Unit)
  unit: Unit;
  @Field((type) => [Media])
  medias?: Media[];
  @Field((type) => Validation, { nullable: true })
  validation?: Validation;
  @Field()
  createdAt: Date;
}
