import { Field, InputType } from '@nestjs/graphql';
import { EditDto } from './edit.dto';

@InputType()
export class CreateQuoteEditDto {
  @Field((type) => [EditDto])
  edits: EditDto[];
  @Field()
  bookingId: string;
  @Field({ nullable: true })
  notes?: string;
}
