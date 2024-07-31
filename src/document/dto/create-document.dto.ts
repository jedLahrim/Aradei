import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDocumentDto {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  dataObj?: string;
  @Field({ nullable: true })
  label?: string;
  @Field()
  filePath: string;
  @Field()
  type: string;
  @Field({ nullable: true })
  companyId?: string;
  @Field({ nullable: true })
  unitId?: string;
  @Field({ nullable: true })
  quoteId?: string;
  @Field({ nullable: true })
  bookingId?: string;
  @Field({ nullable: true })
  isValidated?: boolean;
  @Field()
  attachTo: string;
}
