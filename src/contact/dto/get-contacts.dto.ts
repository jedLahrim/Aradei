import { Field, InputType } from '@nestjs/graphql';
import { LeadSource } from 'src/utils/enums/lead.enum';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@InputType()
export class GetContactsDto extends PaginationDto {
  @Field({ nullable: true })
  source?: LeadSource;
  @Field({ nullable: true })
  query?: string;
}
