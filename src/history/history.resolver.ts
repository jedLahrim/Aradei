import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { HistoryService } from './history.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { UserPayload } from '../auth/interface/user-payload';
import { History } from './entities/history.entity';

@Resolver()
export class HistoryResolver {
  constructor(private readonly historyService: HistoryService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [History])
  getAllHistory(
    @CurrentUser() user: UserPayload,
    @Args('activity') activity: string,
  ) {
    return this.historyService.getAllHistory(user, activity);
  }
}
