import { UserProfile } from '../../user/entities/userProfile.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { History } from 'src/history/entities/history.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { Request } from 'src/company/entities/request.entity';

@ObjectType()
export class Contact {
  @Field()
  id: string;
  @Field()
  isArchived: boolean;
  @Field()
  title: string;
  @Field()
  position: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  cin?: string;
  @Field()
  email: string;
  @Field()
  createdAt: Date;
  @Field()
  firstname: string;
  @Field({ nullable: null })
  phone?: string;
  @Field({ nullable: true })
  mobile?: string;
  @Field((type) => UserProfile)
  creator?: UserProfile;
  @Field((type) => [Brand])
  brands?: Brand[];
  @Field((type) => [Booking], { nullable: true })
  bookings?: Booking[];
  @Field((type) => [History], { nullable: true })
  histories?: History[];
  @Field()
  hasAccount: boolean;
  @Field(() => [Request], { nullable: true })
  requests?: Request[];
  @Field()
  source: string;
}
