import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFloorDto {
  @Field()
  name: string;
  @Field()
  projectId: string;
  @Field()
  svgBluePrint: string;
  @Field()
  csvFilePath: string;
  @Field()
  svgFilePath: string;
}
