import { Floor } from '../../floor/entities/floor.entity';
import { Document } from '../../document/entities/document.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { UserProfile } from '../../user/entities/userProfile.entity';
import { FloorCount } from '../../floor/entities/FloorCount.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { CommercialDocument } from 'src/document/entities/commercialDoc.entity';
import { Picture } from 'src/unit/entities/picture.entity';

@ObjectType()
export class RetailCenter {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  alias?: string;
  @Field({ nullable: true })
  addressCorrespondance?: string;
  @Field()
  address: string;
  @Field({ nullable: true })
  zip?: string;
  @Field({ nullable: true })
  capital?: string;
  @Field({ nullable: true })
  taxIF?: string;
  @Field({ nullable: true })
  patente?: string;
  @Field({ nullable: true })
  legalPersonPosition?: string;
  @Field({ nullable: true })
  bankName?: string;
  @Field({ nullable: true })
  bankIBAN?: string;
  @Field({ nullable: true })
  bankSWIFT?: string;
  @Field({ nullable: true })
  ice?: string;
  @Field()
  logo: string;
  @Field()
  city: string;
  @Field()
  country: string;
  @Field()
  type: number;
  @Field()
  specialty: number;
  @Field()
  description: string;
  @Field()
  ownerEntity: string;
  @Field()
  headquarters: string;
  @Field()
  legalPersonTitle: string;
  @Field()
  legalPersonName: string;
  @Field()
  legalPersonFirstname: string;
  @Field()
  legalPersonRC: string;
  @Field()
  legalPersonCityRC: string;
  @Field({ nullable: true })
  flagShip?: string;
  @Field()
  surface: number;
  @Field()
  openingYear: number;
  @Field({ nullable: true })
  parkingSpaces?: number;
  @Field({ nullable: true })
  annualVisitors?: number;
  @Field()
  picture: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field((type) => [Floor], { nullable: true })
  floors?: Floor[];
  @Field((type) => [Document], { nullable: true })
  documents?: Document[];
  @Field((type) => [Booking], { nullable: true })
  bookings?: Booking[];
  @Field({ nullable: true })
  _count?: FloorCount;
  @Field((type) => [CommercialDocument], { nullable: true })
  commercialDocs?: CommercialDocument[];
  @Field((type) => [UserProfile], { nullable: true })
  UserProfile?: UserProfile[];
  @Field(() => [Picture], { nullable: true })
  pictures?: Picture[];
  @Field(() => String, { nullable: true })
  mixMerchandising?: string;
  @Field(() => String, { nullable: true })
  socialMediaStats?: string;
  @Field(() => String, { nullable: true })
  workHours?: string;
  @Field(() => String, { nullable: true })
  informationContact?: string;
  @Field(() => String, { nullable: true })
  specialtyLeasing?: string;
  @Field(() => String, { nullable: true })
  areaMap?: string;
  @Field(() => String, { nullable: true })
  demography?: string;
}
