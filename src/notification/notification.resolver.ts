import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class NotificationResolver {
  constructor(private notificationService: NotificationService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Notification)
  async createNotification(
    @Args('data') data: CreateNotificationDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.notificationService.createNotification(data);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Notification])
  async getNotifications(@CurrentUser() user: UserPayload) {
    return this.notificationService.getNotifications(user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Notification])
  async getAllNotifications(@CurrentUser() user: UserPayload) {
    return this.notificationService.getAllNotifications(user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Notification)
  async markAsRead(@Args('id') id: string, @CurrentUser() user: UserPayload) {
    return this.notificationService.markAsRead(id, user);
  }
}
