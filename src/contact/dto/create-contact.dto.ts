import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateContactDto {
  @Field()
  title: string;
  @Field({ nullable: true })
  position?: string;
  @Field()
  name: string;
  @Field()
  firstname: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  cin?: string;
  @Field({ nullable: true })
  phone: string;
  @Field({ nullable: true })
  mobile?: string;
  @Field({ nullable: true })
  brandId?: string;
}
