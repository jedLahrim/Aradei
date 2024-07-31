import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TalkService } from './talk.service';
import { Talk } from './entities/talk.entity';
import { CreateTalkDto } from './dto/create-talk.dto';
import { GetTalksDto } from './dto/get-talks.dto';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver(() => Talk)
export class TalkResolver {
  constructor(private readonly talkService: TalkService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Talk])
  async getTalks(
    @Args('data') data: GetTalksDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.talkService.getTalks(data);
  }

  @Mutation(() => Talk)
  @UseGuards(JwtAuthGuard)
  createTalk(
    @Args('data') data: CreateTalkDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.talkService.createTalk(data, user);
  }

  @Mutation(() => Talk)
  @UseGuards(JwtAuthGuard)
  removeTalk(@Args('id') id: string, @CurrentUser() user: UserPayload) {
    return this.talkService.remove(id, user);
  }
}
