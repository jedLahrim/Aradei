import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArchiveContactDto {
  @Field()
  contactId: string;
  @Field()
  archived: boolean;
}
