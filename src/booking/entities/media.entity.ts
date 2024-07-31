import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Media {
  @Field()
  id: string;
  @Field()
  filePath: string;
  @Field()
  fileType: string;
  @Field()
  fileOrder: number;
}
