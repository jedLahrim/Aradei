import { Field, ObjectType } from '@nestjs/graphql';
import { History } from '../entities/history.entity';

@ObjectType()
export class HistoryList {
  @Field((type) => [History])
  histories: History[];
  @Field()
  total: number;

  constructor(histories: History[], total: number) {
    this.histories = histories;
    this.total = total;
  }
}
