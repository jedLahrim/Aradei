import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateForecastDto {
  @Field()
  name?: string;
  @Field()
  year?: Date;
  @Field()
  type?: string;
}
