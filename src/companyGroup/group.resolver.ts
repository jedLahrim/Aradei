import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompanyGroupService } from './group.service';
import { CompanyGroup } from './entities/company-group.entity';
import { CompanyGroupList } from './entities/company-group-list.entity';
import { FilterCompanyGroupDto } from './dto/group-filter.dto';
import { CreateCompanyGroupDto } from './dto/create-group.dto';
import { UpdateCompanyGroupDto } from './dto/update-group.dto';

@Resolver()
export class CompanyGroupResolver {
  constructor(private companyGroupService: CompanyGroupService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => CompanyGroup)
  @UseGuards(JwtAuthGuard)
  async createCompanyGroup(@Args('data') data: CreateCompanyGroupDto) {
    return this.companyGroupService.createCompanyGroup(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => CompanyGroup)
  @UseGuards(JwtAuthGuard)
  async updateCompanyGroup(@Args('data') data: UpdateCompanyGroupDto) {
    return this.companyGroupService.updateCompanyGroup(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => CompanyGroup)
  @UseGuards(JwtAuthGuard)
  async deleteCompanyGroup(@Args('id') id: string): Promise<CompanyGroup> {
    return this.companyGroupService.deleteCompanyGroup(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => CompanyGroupList)
  async getCompanyGroups(@Args('filter') filter: FilterCompanyGroupDto) {
    return this.companyGroupService.getCompanyGroups(filter);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => CompanyGroup)
  async getCompanyGroup(@Args('id') id: string) {
    return this.companyGroupService.getCompanyGroup(id);
  }
}
