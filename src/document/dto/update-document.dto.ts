import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateDocumentDto {
  @Field()
  id: string;

  @Field({ nullable: true })
  filePath?: string;

  @Field({ nullable: true })
  dataObj?: string;

  @Field({ nullable: true })
  sent?: boolean;
}
