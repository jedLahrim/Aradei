import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RemoveLogosDto {
  @Field()
  floorId: string;
  @Field((type) => [String])
  ids: string[];
}
