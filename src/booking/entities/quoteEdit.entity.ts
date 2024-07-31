import { Field, ObjectType } from '@nestjs/graphql';
import { UserProfile } from 'src/user/entities/userProfile.entity';
import { Booking } from './booking.entity';
import { Quote } from './quote.entity';
import {Validation} from "../../validation/entities/validation.entity";

@ObjectType()
export class QuoteEdit {
  @Field()
  id: string;
  @Field()
  bookingId: string;
  @Field({ nullable: true })
  quoteId: string;
  @Field({ nullable: true })
  quote?: Quote;
  @Field({ nullable: true })
  creatorId?: string;
  @Field((type) => Booking, {nullable: true})
  booking?: Booking | null;
  @Field((type) => UserProfile, {nullable: true})
  creator?: UserProfile | null;
  @Field()
  unitSurface: number;
  @Field()
  unitId: string;
  @Field()
  unitPrice: number;
  @Field()
  createdAt: Date;
  @Field({ nullable: true })
  dateFrom?: Date;
  @Field({ nullable: true })
  dateTo?: Date;
}
