import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCompanyDto } from './dto/create-company.dto';
import { FilterCompanyDto } from './dto/filter-companies.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { CompanyService } from './company.service';
import { createNewPopstoresRequestDto } from './dto/create-new-popstores-request.dto';
import { ProspectRequest } from './entities/prospectRequest.entity';
import { CompanyList } from './entities/companyList.entity';
import { Request } from './entities/request.entity';
import { CreateRequestDto } from './dto/CreateRequest.dto';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class CompanyResolver {
  constructor(private companyService: CompanyService) { }

  // @UseGuards(JwtAuthGuard)
  @Mutation(() => Company)
  @UseGuards(JwtAuthGuard)
  async createCompany(
    @Args('data') data: CreateCompanyDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.companyService.createCompany(data, user);
  }

  @Mutation(() => Request)
  @UseGuards(JwtAuthGuard)
  async createRequest(@Args('data') data: CreateRequestDto) {
    return this.companyService.createRequest(data);
  }

  @Mutation(() => Request)
  @UseGuards(JwtAuthGuard)
  async markRequestAsDone(@Args('id') id: string) {
    return this.companyService.markRequestAsDone(id);
  }

  @Mutation(() => Request)
  @UseGuards(JwtAuthGuard)
  async deleteRequest(@Args('id') id: string): Promise<Request> {
    return this.companyService.deleteRequest(id);
  }

  @Mutation(() => ProspectRequest)
  async createNewPopstoresRequest(
    @Args('data') data: createNewPopstoresRequestDto,
  ) {
    return this.companyService.createNewPopstoresRequest(data);
  }

  @Mutation(() => Company)
  @UseGuards(JwtAuthGuard)
  async updateCompany(
    @Args('data') data: UpdateCompanyDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.companyService.updateCompany(user, data);
  }

  @Mutation(() => Company)
  @UseGuards(JwtAuthGuard)
  async deleteCompany(
    @Args('companyId') companyId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.companyService.deleteCompany(user, companyId);
  }

  @Mutation(() => Company)
  @UseGuards(JwtAuthGuard)
  async validateCompany(
    @Args('companyId') companyId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.companyService.validateCompany(user, companyId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => CompanyList)
  async getCompanies(
    @CurrentUser() user: UserPayload,
    @Args('filter') filter: FilterCompanyDto,
  ) {
    return this.companyService.getCompanies(user, filter);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Company)
  async getCompany(
    @CurrentUser() user: UserPayload,
    @Args('companyId') companyId: string,
  ) {
    return this.companyService.getOneCompany(user, companyId);
  }
}
