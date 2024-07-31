import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateContactDto {
  @Field()
  name: string;
  @Field()
  firstname: string;
  @Field()
  title: string;
  @Field()
  position: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  cin?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  mobile?: string;
  @Field()
  contactId: string;
}
