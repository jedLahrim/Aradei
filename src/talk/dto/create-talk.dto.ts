import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTalkDto {
  @Field()
  bookingId: string;
  @Field({ nullable: true })
  documentId?: string;
  @Field({ nullable: true })
  documentLink?: string;
  @Field({ nullable: true })
  recipientId?: string;
  @Field()
  content?: string;
}
