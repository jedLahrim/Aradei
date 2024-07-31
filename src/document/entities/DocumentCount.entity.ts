import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DocumentCount {
  @Field()
  documents: number;
}
