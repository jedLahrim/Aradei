import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateMessageNotificationDto {
  @Field()
  name: string;
  @Field()
  subject: string;
  @Field()
  event: string;
  @Field()
  department: string;
  @Field()
  message: string;
  @Field((returns) => Int)
  emailTemplateId: number;
}
