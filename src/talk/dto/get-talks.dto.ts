import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetTalksDto {
  @Field({ nullable: true })
  documentId: string;
  @Field({ nullable: true })
  bookingId: string;
  @Field({ nullable: true })
  toId?: string;
  @Field({ nullable: true })
  documentType?: string;
}
