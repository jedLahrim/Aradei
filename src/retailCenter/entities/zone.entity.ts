import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Zone {
  @Field()
  id: number;
  @Field()
  type: number;
  @Field()
  name: string;
}
