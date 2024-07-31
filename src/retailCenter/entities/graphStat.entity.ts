import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class graphStat {
  @Field((type) => [String])
  x: string[];
  @Field((type) => [Number])
  y: number[];
}
