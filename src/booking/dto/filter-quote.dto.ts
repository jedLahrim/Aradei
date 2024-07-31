import { PaginationDto } from '../../common/pagination/pagination.dto';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { SortType } from '../../common/enums/sort-type.enum';
import { Quote } from '../entities/quote.entity';

@ObjectType()
export class QuotePagination {
  @Field((returns) => [Quote])
  data: Quote[];

  @Field((returns) => Int)
  total: number;

  constructor(data: Quote[], total: number) {
    this.data = data;
    this.total = total;
  }
}

@InputType()
export class FilterQuoteDto extends PaginationDto {
  @Field((returns) => Boolean, { nullable: true })
  confirmed?: boolean;

  @Field((returns) => String, { nullable: true })
  creatorId?: string;

  @Field((returns) => String, { nullable: true })
  docId?: string;

  @Field((returns) => String, { nullable: true })
  bookingType?: string;

  @Field((returns) => String, { nullable: true })
  orderBy?: SortType;
}
