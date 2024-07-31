import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PlanService } from './plan.service';

@Controller('FloorPlan')
export class FloorPlanController {
  constructor(private planService: PlanService) {}

  @Post('uploadPlan')
  @UseGuards(JwtAuthGuard)
  async updatePlan(@Body() body: { floorId: string; content: string }) {
    return this.planService.updatePlan(body);
  }

  @Get(':floorId/getPlan')
  @UseGuards(JwtAuthGuard)
  async getFloor(@Param('floorId') floorId: string) {
    return this.planService.getFloor(floorId);
  }
}
