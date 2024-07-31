import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from 'src/unit/entities/unit.entity';
import { UserProfile } from 'src/user/entities/userProfile.entity';
import { Booking } from './booking.entity';
import { Invoice } from './invoice.entity';
@ObjectType()
export class InvoiceEdit {
  @Field()
  id: string;
  @Field()
  bookingId: string;
  @Field()
  invoiceId: string;
  @Field({ nullable: true })
  invoice: Invoice;
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
  @Field()
  createdAt: Date;
  @Field({ nullable: true })
  dateFrom?: Date;
  @Field({ nullable: true })
  dateTo?: Date;
}
