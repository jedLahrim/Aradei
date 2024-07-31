import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetMallsDto {
  @Field({ nullable: true })
  projectId?: string;
  @Field({ nullable: true })
  city?: string;
  @Field({ nullable: true })
  type?: number;
  @Field({ nullable: true })
  query?: string;
}
