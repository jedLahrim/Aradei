import { Field, InputType, Int } from '@nestjs/graphql';
import { UserRole } from '../../user/entities/userRole.entity';

@InputType()
export class CreateNotificationDto {
  @Field()
  message: string;
  @Field()
  type: string;
  @Field()
  bookingId: string;
  @Field(() => [String], { nullable: true })
  users: string[];
}
