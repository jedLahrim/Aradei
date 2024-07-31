import { Field, InputType, Int } from '@nestjs/graphql';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@InputType()
export class GetValidationsDto extends PaginationDto {
  @Field(() => [Int], { nullable: true })
  kind?: number[];
}
