import { Field, ObjectType } from '@nestjs/graphql';
import { MessageNotification } from './message-notification.entity';

@ObjectType()
export class EmailTemplate {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  signature: string;
  @Field()
  headerImage: string;
  @Field()
  footerImage: string;
  @Field()
  linkWebsite: string;
  @Field()
  createdAt: Date;
  @Field((type) => [MessageNotification], { nullable: true })
  messageNotifications?: MessageNotification[];
}
