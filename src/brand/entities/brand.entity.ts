import { Document } from '../../document/entities/document.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from '../../company/entities/company.entity';
import { Booking } from 'src/booking/entities/booking.entity';
import { Contact } from 'src/contact/entities/contact.entity';
import { Request } from 'src/company/entities/request.entity';
import { Picture } from 'src/unit/entities/picture.entity';
import { Mix } from 'src/mix/entities/mix.entity';

@ObjectType()
export class Brand {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  logo: string;
  @Field()
  description: string;
  @Field()
  products: string;
  @Field((type) => [Company])
  companies?: Company[];
  @Field((type) => [Booking])
  bookings?: Booking[];
  @Field((type) => [Document])
  techDocs?: Document[];
  @Field()
  createdAt: Date;
  @Field()
  status: string;
  @Field()
  source: string;
  @Field(() => [Contact], { nullable: true })
  contacts?: Contact[];
  @Field(() => [Request], { nullable: true })
  requests?: Request[];
  @Field({ nullable: true })
  website?: string;
  @Field({ nullable: true })
  linkedin?: string;
  @Field(() => Mix, { nullable: true })
  mix?: Mix;
  @Field(() => [Picture], { nullable: true })
  pictures?: Picture[];
  @Field({ nullable: true })
  logoPlan?: string;
  @Field({ nullable: true })
  bgBanner?: string;
}
