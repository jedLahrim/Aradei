import { Field, InputType } from '@nestjs/graphql';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@InputType()
export class FilterUnitsDto extends PaginationDto {
  @Field({ nullable: true })
  retailCenter?: string;
  @Field({ nullable: true })
  query?: string;
  @Field(() => [String], { nullable: true })
  assets?: string[];
  @Field(() => [String], { nullable: true })
  floors?: string[];
  @Field(() => [Number], { nullable: true })
  gla?: number[];
  @Field(() => [Number], { nullable: true })
  types?: number[];
  @Field(() => Number, { nullable: true })
  status?: number;
  @Field(() => [Number], { nullable: true })
  dependencies?: number[];
  @Field(() => [Number], { nullable: true })
  mixes?: number[];
  @Field(() => [String], { nullable: true })
  companies?: string[];
  @Field(() => [String], { nullable: true })
  brands?: string[];
  @Field(() => [String], { nullable: true })
  dateRange?: string[];
}
