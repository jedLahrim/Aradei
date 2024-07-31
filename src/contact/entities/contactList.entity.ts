import { Field, ObjectType } from '@nestjs/graphql';
import { Contact } from './contact.entity';

@ObjectType()
export class ContactList {
  @Field((type) => [Contact])
  contacts: Contact[];
  @Field()
  totalContacts: number;

  constructor(contacts: Contact[], totalContacts: number) {
    this.contacts = contacts;
    this.totalContacts = totalContacts;
  }
}
