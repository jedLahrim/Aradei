import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ForcastsService } from './forcasts.service';
import { Forecast } from './entities/forecast';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { addUnitsToForecastDto } from './dto/add-units-to-forecast.dto';
import { deleteSelectedUnitsForecastsDto } from './dto/delete-selected-units-forecasts.dto';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class ForcastsResolver {
  constructor(private forcastsService: ForcastsService) {}

  /* @UseGuards(JwtAuthGuard)
    @Query(() => [MonthlyForecasts])
    async getMonthlyForecasts(
        @CurrentUser() user: UserPayload,
    ) {
        return this.forcastsService.getMonthlyForecasts(user);
    }*/

  @UseGuards(JwtAuthGuard)
  @Query(() => [Forecast])
  async getForecasts(@CurrentUser() user: UserPayload) {
    return this.forcastsService.getForecasts(user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Forecast)
  async createForecast(
    @Args('data') data: CreateForecastDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.forcastsService.createForecast(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Forecast)
  async createLontermForecast(
    @Args('data') data: CreateForecastDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.forcastsService.createLontermForecast(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteForecast(
    @Args('id') id: number,
    @CurrentUser() user: UserPayload,
  ) {
    return this.forcastsService.deleteForecast(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Forecast)
  async updateForecast(
    @Args('data') data: UpdateForecastDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.forcastsService.updateForecast(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async addUnitsToForecast(
    @Args('data') data: addUnitsToForecastDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.forcastsService.addUnitsToForecast(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteSelectedUnitsForecasts(
    @Args('data') data: deleteSelectedUnitsForecastsDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.forcastsService.deleteSelectedUnitsForecasts(data, user);
  }
}
