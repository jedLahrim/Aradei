import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from '../../company/entities/company.entity';
import { Brand } from '../../brand/entities/brand.entity';
import { Contact } from '../../contact/entities/contact.entity';
import { CommercialDocument } from '../../document/entities/commercialDoc.entity';
import { UserProfile } from '../../user/entities/userProfile.entity';

@ObjectType()
export class Presentation {
  @Field()
  id: string;
  @Field(() => Company, { nullable: true })
  company?: Company;
  @Field(() => Brand, { nullable: true })
  brand?: Brand;
  @Field((type) => Contact, { nullable: true })
  contact?: Contact;
  @Field((type) => UserProfile, { nullable: true })
  creator?: UserProfile;
  @Field((type) => [CommercialDocument], { nullable: true })
  commercialDocs?: CommercialDocument[];
  @Field()
  createdAt?: Date;
}
