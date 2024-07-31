import { Field, InputType } from '@nestjs/graphql';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@InputType()
export class GetUnitsDto extends PaginationDto {
  @Field({ nullable: true })
  retailCenter?: string;
  @Field({ nullable: true })
  floor?: string;
  @Field({ nullable: true })
  mix?: number;
  @Field({ nullable: true })
  status?: number;
  @Field({ nullable: true })
  rentType?: number;
  @Field({ nullable: true })
  query?: string;
}
