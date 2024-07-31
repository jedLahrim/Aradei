import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHistoryInput {
  @Field()
  action: string;
  @Field({ nullable: true })
  contactHistoryId?: string;
  @Field({ nullable: true })
  unitHistoryId?: string;
  @Field({ nullable: true })
  documentHistoryId?: string;
}
