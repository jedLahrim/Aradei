import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { FloorPlanController } from './plan.controller';
import { PrismaModule } from '../../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FloorPlanController],
  providers: [PlanService],
})
export class PlanModule {}
