import { Field, InputType, Int } from '@nestjs/graphql';
import { CompanyType } from 'src/utils/enums/lead.enum';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@InputType()
export class FilterCompanyDto extends PaginationDto {
  @Field((returns) => Int, { nullable: true })
  type?: CompanyType;
  @Field({ nullable: true })
  query?: string;
}
