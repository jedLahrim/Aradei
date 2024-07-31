import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PresentationsService } from './presentations.service';
import { sendPresentationDto } from './dto/send-presentation.dto';
import { Presentation } from './entities/presentation';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class PresentationsResolver {
  constructor(private presentationsService: PresentationsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  sendPresentation(
    @CurrentUser() user: UserPayload,
    @Args('data') data: sendPresentationDto,
  ) {
    return this.presentationsService.sendPresentation(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Presentation])
  async getPresentations(@CurrentUser() user: UserPayload) {
    return this.presentationsService.getPresentations(user);
  }
}
