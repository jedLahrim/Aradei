import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmailNotificationService } from './email.notification.service';
import { MessageNotification } from './entities/message-notification.entity';
import { UpdateMessageNotificationDto } from './dto/update-message-notification.dto';
import { CreateMessageNotificationDto } from './dto/create-message-notification.dto';
import { EmailTemplate } from './entities/email-template.entity';
import { UpdateEmailTemplateDto } from './dto/update-email-template.dto';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class EmailNotificationResolver {
  constructor(private emailNotificationService: EmailNotificationService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MessageNotification)
  async createMessageNotification(
    @Args('data') data: CreateMessageNotificationDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.emailNotificationService.createMessageNotification(data, user);
  }

  @Query(() => MessageNotification)
  async getMessageNotification(
    @CurrentUser() user: UserPayload,
    @Args('name') name: string,
  ) {
    return this.emailNotificationService.getMessageNotification(user, name);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MessageNotification)
  async updateMessageNotification(
    @Args('data') data: UpdateMessageNotificationDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.emailNotificationService.updateMessageNotification(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => EmailTemplate)
  async updateEmailTemplate(
    @Args('data') data: UpdateEmailTemplateDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.emailNotificationService.updateEmailTemplate(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [MessageNotification])
  async getMessageNotifications(@CurrentUser() user: UserPayload) {
    return this.emailNotificationService.getMessageNotifications(user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [EmailTemplate])
  async getEmailTemplates(@CurrentUser() user: UserPayload) {
    return this.emailNotificationService.getEmailTemplates(user);
  }
}
