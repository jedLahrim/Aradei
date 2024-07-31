import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FilterDateDto {
  @Field()
  from: Date;
  @Field()
  to: Date;
}
@InputType()
export class GetQuotesDto {
  @Field({ nullable: true })
  take?: number;
  @Field({ nullable: true })
  skip?: number;
  @Field({ nullable: true })
  query?: string;
  @Field(() => [String], { nullable: true })
  brandIds?: string[];
  @Field({ nullable: true })
  status?: number;
  @Field(() => FilterDateDto, { nullable: true })
  filterDate?: FilterDateDto;
  @Field({ nullable: true })
  bookingType?: string;
}
