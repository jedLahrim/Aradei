import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from './company.entity';
import { Contact } from 'src/contact/entities/contact.entity';
import { Brand } from 'src/brand/entities/brand.entity';

@ObjectType()
export class Request {
  @Field()
  id: string;
  @Field()
  message: string;
  @Field((type) => Company)
  company?: Company;
  @Field((type) => Brand)
  brand?: Brand;
  @Field((type) => Contact)
  contact?: Contact;
  @Field((type) => Boolean)
  isDone: boolean;
  @Field((type) => Date)
  createdAt: Date;
}
