import { Field, InputType, Int } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateRetailCenterDto {
  @Field()
  name: string;
  @Field({ nullable: true })
  alias?: string;
  @Field()
  address: string;
  @Field()
  city: string;
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
  @Field()
  country: string;
  @Field((returns) => Int)
  type: number;
  @Field((returns) => Int)
  specialty: number;
  @Field((returns) => Int)
  surface: number;
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
  legalPersonPosition: string;
  @Field()
  bankName: string;
  @Field()
  bankIBAN: string;
  @Field()
  bankSWIFT: string;
  @Field()
  legalPersonRC: string;
  @Field()
  legalPersonCityRC: string;
  @Field({ nullable: true })
  flagShip?: string;
  @Field((returns) => Int)
  openingYear: number;
  @Field((returns) => Int, { nullable: true })
  parkingSpaces?: number;
  @Field((returns) => Int, { nullable: true })
  annualVisitors?: number;
  @Field()
  picture: string;
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
}
