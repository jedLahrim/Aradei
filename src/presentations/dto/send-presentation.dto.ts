import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class sendPresentationDto {
  /*  @Field({nullable: true})
    id?: number;*/
  @Field(() => [String], { nullable: true })
  documents?: string[];
  @Field()
  brandId?: string;
  @Field()
  companyId?: string;
  @Field()
  contactId?: string;
}
