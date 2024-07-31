import { Field, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class UpdateRetailCenterDto {
  @Field()
  id: string;
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  alias?: string;
  @Field({ nullable: true })
  addressCorrespondance?: string;
  @Field({ nullable: true })
  address?: string;
  @Field({ nullable: true })
  city?: string;
  @Field({ nullable: true })
  country?: string;
  @Field({ nullable: true })
  zip?: string;
  @Field({ nullable: true })
  capital?: string;
  @Field({ nullable: true })
  taxIF?: string;
  @Field({ nullable: true })
  patente?: string;
  @Field({ nullable: true })
  ice?: string;
  @Field({ nullable: true })
  type?: number;
  @Field({ nullable: true })
  specialty?: number;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  ownerEntity?: string;
  @Field({ nullable: true })
  headquarters?: string;
  @Field({ nullable: true })
  legalPersonTitle?: string;
  @Field({ nullable: true })
  legalPersonPosition?: string;
  @Field({ nullable: true })
  bankName?: string;
  @Field({ nullable: true })
  bankIBAN?: string;
  @Field({ nullable: true })
  bankSWIFT?: string;
  @Field({ nullable: true })
  legalPersonName?: string;
  @Field({ nullable: true })
  legalPersonFirstname?: string;
  @Field({ nullable: true })
  legalPersonRC?: string;
  @Field({ nullable: true })
  legalPersonCityRC?: string;
  @Field({ nullable: true })
  flagShip?: string;
  @Field({ nullable: true })
  surface?: number;
  @Field({ nullable: true })
  openingYear?: number;
  @Field({ nullable: true })
  parkingSpaces?: number;
  @Field({ nullable: true })
  annualVisitors?: number;
  @Field({ nullable: true })
  picture?: string;
  @Field({ nullable: true })
  logo?: string;
  @Field(() => [String], { nullable: true })
  pictures?: string[];
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
