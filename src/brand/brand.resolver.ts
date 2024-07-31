import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandService } from './brand.service';
import { FilterBrandsDto } from './dto/filter-brands.dto';
import { BrandList } from './entities/brandList.entity';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class BrandResolver {
  constructor(private brandService: BrandService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Brand)
  async createBrand(
    @Args('data') data: CreateBrandDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.brandService.createBrand(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Brand)
  async updateBrand(
    @Args('data') data: UpdateBrandDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.brandService.updateBrand(data, user);
  }

  @Mutation(() => Boolean)
  async deleteBrand(@Args('id') id: string) {
    return this.brandService.deleteBrand(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => BrandList)
  async getBrands(
    @Args('data') data: FilterBrandsDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.brandService.getBrands(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Brand)
  async getBrand(
    @CurrentUser() user: UserPayload,
    @Args('brandId') brandId: string,
  ) {
    return this.brandService.getBrand(user, brandId);
  }
}
