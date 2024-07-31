import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUnit3DDto {
  @Field()
  id: number;
  @Field()
  floorId: string;
}
