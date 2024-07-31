import { Field, InputType } from '@nestjs/graphql';
import { LeadSource, LeadStatus } from 'src/utils/enums/lead.enum';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@InputType()
export class FilterBrandsDto extends PaginationDto {
  @Field({ nullable: true })
  source?: LeadSource;
  @Field({ nullable: true })
  status?: LeadStatus;
  @Field({ nullable: true })
  query?: string;
}
