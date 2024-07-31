import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditDto {
  @Field()
  unitId: string;
  @Field()
  unitSurface: number;
  @Field()
  unitPrice: number;
  @Field({ nullable: true })
  quoteId?: string | null;
  @Field({ nullable: true })
  bookingId?: string;
  @Field({ nullable: true })
  notes?: string;
  @Field({ nullable: true })
  dateFrom?: Date;
  @Field({ nullable: true })
  dateTo?: Date;
}
