import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { FloorService } from './floor.service';
import { AddLogoDto } from './dto/add-logo.dto';
import { RemoveLogosDto } from './dto/remove-logos.dto';

@Resolver()
export class FloorResolver {
  constructor(private floorService: FloorService) { }

  @Query(() => String)
  @UseGuards(JwtAuthGuard)
  async getPlan(@Args('floorId') floorId: string) {
    return this.floorService.getPlan(floorId);
  }

  @Query(() => String)
  async getPopstoresPlan(@Args('floorId') floorId: string) {
    return this.floorService.getPlan(floorId);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async updatePlan(@Args('data') data: UpdatePlanDto) {
    return this.floorService.updatePlan(data);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async addLogo(@Args('data') data: AddLogoDto) {
    return this.floorService.addLogo(data);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async removeLogos(@Args('data') data: RemoveLogosDto) {
    return this.floorService.removeLogos(data);
  }

  @Mutation(() => Boolean)
  async updateSpecialtyUnitsShapes() {
    return this.floorService.updateSpecialtyUnitsShapes();
  }
}
