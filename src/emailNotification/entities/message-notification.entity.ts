import { Field, ObjectType } from '@nestjs/graphql';
import { EmailTemplate } from './email-template.entity';
import { UserRole } from '../../user/entities/userRole.entity';

@ObjectType()
export class MessageNotification {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  event: string;
  @Field()
  department: string;
  @Field((type) => EmailTemplate)
  emailTemplate?: EmailTemplate;
  @Field((type) => [UserRole])
  tos?: UserRole[];
  @Field()
  subject: string;
  @Field()
  toProspect: boolean;
  @Field()
  toSender: boolean;
  @Field()
  message: string;
  @Field()
  createdAt: Date;
}
