import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Mix } from './entities/mix.entity';
import { CreateMixDto } from './dto/create-mix.dto';
import { CreateMixCategoryDto } from './dto/create-mix-category.dto';
import { UpdateMixDto } from './dto/update-mix.dto';
import { UpdateMixCategoryDto } from './dto/update-mixCategory.dto';
import { MixCategory } from './entities/mixCategory.entity';
import { MixService } from './mix.service';

@Resolver()
export class MixResolver {
  constructor(private mixService: MixService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Mix)
  async updateMix(@Args('data') data: UpdateMixDto) {
    return this.mixService.updateMix(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Mix)
  async createMix(@Args('data') data: CreateMixDto) {
    return this.mixService.createMix(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MixCategory)
  async updateMixCategory(@Args('data') data: UpdateMixCategoryDto) {
    return this.mixService.updateMixCategory(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MixCategory)
  async createMixCategory(@Args('data') data: CreateMixCategoryDto) {
    return this.mixService.createMixCategory(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Mix)
  async removeMix(@Args('mixId', { type: () => Int }) mixId: number) {
    return this.mixService.removeMix(mixId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MixCategory)
  async removeMixCategory(
    @Args('mixCategoryId', { type: () => Int }) mixCategoryId: number,
  ) {
    return this.mixService.removeMixCategory(mixCategoryId);
  }

  @Query(() => [MixCategory])
  @UseGuards(JwtAuthGuard)
  async getMixCategories() {
    return this.mixService.getMixCategories();
  }

  @Query(() => [Mix])
  @UseGuards(JwtAuthGuard)
  async getMixes() {
    return this.mixService.getMixes();
  }
}
