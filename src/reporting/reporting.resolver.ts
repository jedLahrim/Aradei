import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Stats } from './entities/stats.entity';
import { CompanyStats } from './entities/companyStats.entity';
import {
  MonthRevenuesStats,
  ReportingStats,
  RevenuesStats,
} from './entities/revenuesStats.entity';
import { ReportsStats } from './entities/reports-stat.entity';
import { ReportingType } from './type/reporting.type';
import { UserPayload } from '../auth/interface/user-payload';
import { ClientManager } from 'src/prisma/ClientManager';

@Resolver()
export class ReportingResolver {
  constructor(private readonly reportingService: ReportingService) {}

  @Query(() => Stats)
  getStats(@CurrentUser() user: UserPayload) {
    return this.reportingService.getStats(user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => ReportsStats)
  getReportsStats(
    @Args('type') type: string,
    @Args('assetId', { nullable: true }) assetId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.reportingService.getReportsStats(type, assetId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => CompanyStats)
  getCompanyStatistics(@Args('companyId') companyId: string) {
    return this.reportingService.getCompanyStats(companyId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => CompanyStats)
  getContactStatistics(@Args('contactId') contactId: string) {
    return this.reportingService.getContactStats(contactId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => CompanyStats)
  getBrandStatistics(@Args('brandId') brandId: string) {
    return this.reportingService.getBrandStats(brandId);
  }

  @Query(() => CompanyStats)
  getUnitStatistics(@Args('unitId') unitId: string) {
    return this.reportingService.getUnitStats(unitId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => MonthRevenuesStats)
  getMonthRevenues(
    @Args('type') type: ReportingType,
    @Args('assetId', { nullable: true }) assetId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.reportingService.getMonthRevenues(type, assetId, user);
  }

  @Query(() => RevenuesStats)
  getTotalRevenue(@Args('companyId') companyId?: string) {
    return this.reportingService.getTotalRevenue(companyId);
  }

  @Query(() => ReportingStats)
  getReport(@CurrentUser() user: UserPayload) {
    return this.reportingService.getReports(user);
  }
}
