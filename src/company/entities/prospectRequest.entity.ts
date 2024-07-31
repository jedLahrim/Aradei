import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from './company.entity';
import { Unit } from 'src/unit/entities/unit.entity';
import { Contact } from 'src/contact/entities/contact.entity';

@ObjectType()
export class ProspectRequest {
  @Field()
  id: string;
  @Field(() => Company)
  company?: Company;
  @Field(() => Unit)
  unit?: Unit;
  @Field(() => Contact)
  contact?: Contact;
  @Field()
  dateFrom: Date;
  @Field()
  dateTo: Date;
}
