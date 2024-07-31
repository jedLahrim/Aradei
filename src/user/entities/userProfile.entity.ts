import { UserRole } from './userRole.entity';
import { Document } from '../../document/entities/document.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { History } from '../../history/entities/history.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { RetailCenter } from '../../retailCenter/entities/retailcenter.entity';

@ObjectType()
export class UserProfile {
  @Field()
  id: string;
  @Field()
  email: string;
  @Field()
  name: string;
  @Field()
  firstName: string;
  @Field()
  picture: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  status?: number;
  @Field()
  jobTitle: string;
  @Field({ nullable: true })
  mobilePhone?: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field()
  role?: UserRole;
  @Field()
  roleId: number;
  @Field(() => [Document], { nullable: true })
  document?: Document[];
  @Field(() => [Booking], { nullable: true })
  bookings?: Booking[];
  @Field(() => [History], { nullable: true })
  histories?: History[];
  @Field(() => [RetailCenter], { nullable: true })
  retailCenters?: RetailCenter[];
}
