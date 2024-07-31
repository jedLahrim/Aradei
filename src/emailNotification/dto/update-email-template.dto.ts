import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateEmailTemplateDto {
  @Field()
  signature: string;
  @Field()
  headerImage: string;
  @Field()
  footerImage: string;
  @Field()
  linkWebsite: string;
  @Field((returns) => Int)
  emailTemplateId: number;
}
