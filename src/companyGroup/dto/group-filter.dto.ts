import { Field, InputType } from '@nestjs/graphql';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@InputType()
export class FilterCompanyGroupDto extends PaginationDto {
  @Field({ nullable: true })
  companyId?: string;
  @Field({ nullable: true })
  contactId?: string;
  @Field({ nullable: true })
  query?: string;
}
