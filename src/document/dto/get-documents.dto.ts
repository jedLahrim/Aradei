import { Field, InputType } from '@nestjs/graphql';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@InputType()
export class GetDocumentsDto extends PaginationDto {
  @Field({ nullable: true })
  company?: string;
  @Field((type) => [String], { nullable: true })
  type?: string[];
  @Field({ nullable: true })
  retailCenter?: string;
  @Field({ nullable: true })
  unit?: string;
}
