import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from './document.entity';

@ObjectType()
export class Page {
  @Field({ nullable: true })
  id?: string;
  @Field()
  content: string;
  @Field((type) => Document)
  document?: Document;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}
