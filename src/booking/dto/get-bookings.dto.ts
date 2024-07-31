import { Field, InputType } from '@nestjs/graphql';
import { PaginationDto } from '../../common/pagination/pagination.dto';
import { SortType } from '../../common/enums/sort-type.enum';

@InputType()
export class GetBookingsDto extends PaginationDto {
  @Field({ nullable: true })
  company?: string;
  @Field({ nullable: true })
  brand?: string;
  @Field({ nullable: true })
  contact?: string;
  @Field({ nullable: true })
  creator?: string;
  @Field({ nullable: true })
  status?: number;
  @Field({ nullable: true })
  hasPayment?: boolean;
  @Field({ nullable: true })
  query?: string;
  @Field({ nullable: true })
  asset?: string;
  @Field({ nullable: true })
  type?: string;
  @Field({ nullable: true })
  sortType?: SortType;
}
