import { Constant } from '../constant';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PaginationDto {
  @Field({ nullable: true })
  take?: number;
  @Field({ nullable: true })
  skip?: number;

  constructor(take?: number, skip?: number) {
    this.take = take ?? Constant.TAKE;
    this.skip = skip ?? Constant.SKIP;
  }
}
