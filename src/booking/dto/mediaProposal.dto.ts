import { Field, InputType } from '@nestjs/graphql';

@InputType()
class MediaDto {
  @Field()
  filePath: string;
  @Field()
  fileType: string;
}

@InputType()
export class MediaProposalDto {
  @Field()
  bookingId: string;
  @Field()
  unitId: string;
  @Field((type) => [MediaDto])
  media: MediaDto[];
}
