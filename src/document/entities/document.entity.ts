import { UserProfile } from '../../user/entities/userProfile.entity';
import { Unit } from '../../unit/entities/unit.entity';
import { Company } from '../../company/entities/company.entity';
import { RetailCenter } from '../../retailCenter/entities/retailcenter.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { Brand } from '../../brand/entities/brand.entity';
import { Floor } from '../../floor/entities/floor.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Validation } from '../../validation/entities/validation.entity';
import { Talk } from 'src/talk/entities/talk.entity';
import { Page } from './page.entity';

@ObjectType()
export class Document {
  @Field({ nullable: true })
  id?: string;
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  label?: string;
  @Field({ nullable: true })
  dataObj?: string;
  @Field(() => [Page], { nullable: true })
  pages?: Page[];
  @Field({ nullable: true })
  filePath?: string;
  @Field()
  type: string;
  @Field((type) => UserProfile)
  creator?: UserProfile;
  @Field((type) => [UserProfile])
  validators?: UserProfile[];
  @Field((type) => Unit, { nullable: true })
  unit?: Unit | null;
  @Field((type) => Company, { nullable: true })
  company?: Company | null;
  @Field((type) => RetailCenter, { nullable: true })
  retailCenter?: RetailCenter | null;
  @Field((type) => Floor, { nullable: true })
  floor?: Floor | null;
  @Field((type) => Booking, { nullable: true })
  booking?: Booking | null;
  @Field((type) => Brand, { nullable: true })
  brand?: Brand;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field()
  sentAt: Date;
  @Field()
  sent: boolean;
  @Field({ nullable: true })
  isAccepted?: boolean;
  @Field({ nullable: true })
  isValidated?: boolean;
  @Field({ nullable: true })
  needsValidation?: boolean;
  @Field((type) => Validation, { nullable: true })
  validation?: Validation | null;
  @Field((type) => [Talk], { nullable: true })
  talks?: Talk[];
}
