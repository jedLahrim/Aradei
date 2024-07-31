import { Field, HideField, InputType, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { AppClient } from 'app-client';

@ObjectType()
@InputType('ClientLegalInput')
export class ClientLegal {
  @Field((type) => String, { nullable: true })
  name: string;
  @Field((type) => String, { nullable: true })
  address: string;
  @Field((type) => String, { nullable: true })
  city: string;
  @Field((type) => String, { nullable: true })
  bankName: string;
  @Field((type) => String, { nullable: true })
  bankIBAN: string;
  @Field((type) => String, { nullable: true })
  bankSWIFT: string;
  @Field((type) => Number, { nullable: true })
  capital: number;
  @Field((type) => String, { nullable: true })
  hq: string;
  @Field((type) => String, { nullable: true })
  rc: string;
  @Field((type) => String, { nullable: true })
  if: string;
  @Field((type) => String, { nullable: true })
  patent: string;
  @Field((type) => String, { nullable: true })
  ice: string;
  @Field((type) => String, { nullable: true })
  corAddress: string;
  @Field((type) => String, { nullable: true })
  zip: string;
  @Field((type) => String, { nullable: true })
  contact: string;
}

@ObjectType()
export class ClientMedia {
  @Field()
  logo: string;
  @Field()
  logoLight: string;
  @Field()
  proposal: string;
}

@ObjectType()
export class Client implements AppClient {
  @HideField()
  databaseUrl: string;
  @Field()
  emailFromName: string;
  @Field()
  timezone: string;
  @Field()
  emailFrom: string;
  @Field((type) => ClientLegal)
  legal: ClientLegal;
  @Field((type) => ClientMedia)
  media: ClientMedia;
  @Field()
  name: string;
  @Field()
  primaryColor: string;
  @Field((type) => GraphQLJSON)
  process: Record<string, Record<string, boolean>>;
}
