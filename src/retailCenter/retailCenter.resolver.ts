import { UseGuards } from '@nestjs/common';
import { CreateRetailCenterDto } from './dto/create-retailcenter.dto';
import { UpdateRetailCenterDto } from './dto/update-retailcenter.dto';
import { GetMallsDto } from './dto/get-malls.dto';
import { RetailCenter } from './entities/retailcenter.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RetailCenterService } from './retailCenter.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class RetailCenterResolver {
  constructor(private retailCenterService: RetailCenterService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => RetailCenter)
  async createRetailCenter(@Args('data') data: CreateRetailCenterDto) {
    return this.retailCenterService.createRetailCenter(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => RetailCenter)
  async updateRetailCenter(
    @Args('data') data: UpdateRetailCenterDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.retailCenterService.updateRetailCenter(data, user);
  }

  @Query(() => [RetailCenter])
  @UseGuards(JwtAuthGuard)
  async getRetailCenters(
    @CurrentUser() user: UserPayload,
    @Args('data') data: GetMallsDto,
  ) {
    return this.retailCenterService.getRetailCenters(user, data);
  }

  @Query(() => RetailCenter)
  @UseGuards(JwtAuthGuard)
  async getRetailCenter(@Args('retailCenterId') retailCenterId: string) {
    return this.retailCenterService.getRetailCenter(retailCenterId);
  }
}
