import { Field, ObjectType } from '@nestjs/graphql';
import { Quote } from './quote.entity';

@ObjectType()
export class QuoteList {
  @Field(() => [Quote])
  quotes: Quote[];
  @Field()
  total: number;
}
