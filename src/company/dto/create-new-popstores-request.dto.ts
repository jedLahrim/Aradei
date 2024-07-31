import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createNewPopstoresRequestDto {
  @Field()
  unitId: string;
  @Field()
  companyId: string;
  @Field()
  contactId: string;
  @Field()
  dateFrom: Date;
  @Field()
  dateTo: Date;
}
