import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRequestDto {
  @Field()
  message: string;
  @Field()
  companyId: string;
  @Field()
  brandId: string;
  @Field()
  contactId: string;
}
