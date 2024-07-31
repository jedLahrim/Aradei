import { Field, InputType, Int } from '@nestjs/graphql';
import { UserRole } from '../../user/entities/userRole.entity';

@InputType()
export class UpdateMessageNotificationDto {
  @Field()
  name: string;
  @Field()
  subject: string;
  @Field()
  message: string;
  @Field()
  event: string;
  @Field()
  toProspect: boolean;
  @Field()
  toSender: boolean;
  @Field()
  department: string;
  @Field((returns) => Int)
  messageNotificationId: number;
  @Field((type) => [Number])
  tos?: number[];
}
