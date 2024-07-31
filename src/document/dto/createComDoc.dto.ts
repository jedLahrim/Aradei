import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateComDoc {
  @Field()
  name: string;
  @Field()
  type?: string;
  @Field()
  filePath: string;
  @Field({ nullable: true })
  parent?: string;
  @Field({ nullable: true })
  parentId?: string;
}
