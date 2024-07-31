import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UpdateUnitDto } from './dto/update-unit.dto';
import { UnitStats } from './entities/unitStats.entity';

import { setUnitPicsDto } from './dto/unit-pics.dto';
import { CreateUnitDto } from './dto/create-unit.dto';
import { GetUnitsDto } from './dto/get-units.dto';
import { Unit } from './entities/unit.entity';
import { Specialty } from './entities/specialty.entity';
import { Feature } from './entities/feature.entity';
import { UnitList } from './entities/unitList.entity';
import { UnitService } from './unit.service';
import { CurrentUser } from '../auth/user.decorator';
import { DateRange } from './dto/date-range.dto';
import { InputUnitFloorAndDateSearch } from './dto/input-floor-date-search';
import { CreateUnitsGrpDto } from './dto/create-unit-grp.dto';
import { Category } from './entities/category.entity';
import { FilterUnitsDto } from './dto/filter-units.dto';
import { UnitLogoMetadata } from './entities/unitLogoMetadata.entity';
import { CreateUnitLogoMetadataDto } from './dto/create-unit-logo-metadata.dto';
import { UpdateUnitLogoMetadataDto } from './dto/update-unit-logo-metadata.dto';
import { BulkUnitLogoMetadataDto } from './dto/bulk-unit-logo-metadata.dto';
import { GetUnitsLogoMetadataDto } from './dto/get-unit-logo-metadata.dto';
import { UserPayload } from '../auth/interface/user-payload';
import { CreateBulkUnitListDto } from './dto/create-bulk-unit.dto';

@Resolver()
export class UnitResolver {
  constructor(private unitService: UnitService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Unit)
  async updateUnit(@Args('data') data: UpdateUnitDto) {
    return this.unitService.updateUnit(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Unit)
  async createUnit(@Args('data') data: CreateUnitDto) {
    return this.unitService.createUnit(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async createBulkUnit(@Args('data') data: CreateBulkUnitListDto) {
    return this.unitService.createBulkUnit(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async removeUnit(@Args('unitId') unitId: string) {
    return this.unitService.removeUnit(unitId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async detachGroupUnit(@Args('unitId') unitId: string) {
    return this.unitService.detachGroupUnit(unitId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Unit)
  async createUnitsGroup(@Args('data') data: CreateUnitsGrpDto) {
    return this.unitService.createUnitsGroup(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Unit)
  async setUnitPics(
    @Args('data') data: setUnitPicsDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.unitService.setUnitPics(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteUnitPic(
    @Args('unitId') unitId: string,
    @Args('picId') picId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.unitService.deleteUnitPic(unitId, picId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UnitLogoMetadata)
  async createUnitLogoMetadata(@Args('data') data: CreateUnitLogoMetadataDto) {
    return this.unitService.createUnitLogoMetadata(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UnitLogoMetadata)
  async updateUnitLogoMetadata(@Args('data') data: UpdateUnitLogoMetadataDto) {
    return this.unitService.updateUnitLogoMetadata(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [UnitLogoMetadata])
  async bulkUpdateUnitLogoMetadata(
    @Args('data') data: BulkUnitLogoMetadataDto,
  ) {
    return this.unitService.bulkUpdateUnitLogoMetadata(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteUnitsLogoMetadata(@Args('id') id: string) {
    return this.unitService.deleteUnitsLogoMetadata(id);
  }

  @Query(() => [UnitLogoMetadata])
  @UseGuards(JwtAuthGuard)
  async getUnitsLogoMetadata(@Args('data') data: GetUnitsLogoMetadataDto) {
    return this.unitService.getUnitsLogoMetadata(data);
  }

  @Query(() => UnitList)
  @UseGuards(JwtAuthGuard)
  async getUnits(
    @CurrentUser() user: UserPayload,
    @Args('data') data: GetUnitsDto,
  ) {
    return this.unitService.getUnits(user, data);
  }

  @Query(() => UnitList)
  @UseGuards(JwtAuthGuard)
  async getFilteredUnits(
    @CurrentUser() user: UserPayload,
    @Args('data') data: FilterUnitsDto,
  ) {
    return this.unitService.getFilteredUnits(user, data);
  }

  @Query(() => [Unit])
  @UseGuards(JwtAuthGuard)
  async getGroupUnits(@Args('unitId') unitId: string) {
    return this.unitService.getGroupUnits(unitId);
  }

  @Query(() => UnitList)
  async getPopstoresUnits(@Args('data') data: GetUnitsDto) {
    return this.unitService.getPopstoresUnits(data);
  }

  @Query(() => Unit)
  async getPopstoresUnit(@Args('unitId') unitId: string) {
    return this.unitService.getPopstoresUnit(unitId);
  }

  @Query(() => Unit)
  @UseGuards(JwtAuthGuard)
  async getUnit(@Args('unitId') unitId: string) {
    return this.unitService.getUnit(unitId);
  }

  @Query(() => [Specialty])
  @UseGuards(JwtAuthGuard)
  async getSpecialties() {
    return this.unitService.getSpecialties();
  }

  @Query(() => UnitStats)
  @UseGuards(JwtAuthGuard)
  async getUnitStats(
    @CurrentUser() user: UserPayload,
    @Args('retailCenterId', { nullable: true }) retailCenterId?: string,
    @Args('rentType', { nullable: true }) rentType?: number,
  ) {
    return this.unitService.getUnitStats(user, retailCenterId, rentType);
  }

  @Query(() => [Feature])
  @UseGuards(JwtAuthGuard)
  async getFeatures() {
    return this.unitService.getFeatures();
  }

  @Query(() => [Category])
  @UseGuards(JwtAuthGuard)
  async getCategories() {
    return this.unitService.getCategories();
  }

  @Query(() => [DateRange])
  @UseGuards(JwtAuthGuard)
  async getUnitUnavailableDates(@Args('id') id: string) {
    return this.unitService.getUnitUnavailableDates(id);
  }

  @Query(() => [Unit])
  @UseGuards(JwtAuthGuard)
  async getAvailableUnitsByDate(
    @Args('data') data: InputUnitFloorAndDateSearch,
  ) {
    return this.unitService.getAvailableUnitsByDate(data);
  }
}
