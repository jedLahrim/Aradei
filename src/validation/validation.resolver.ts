import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ValidationService } from './validation.service';
import { CreateValidationDto } from './dto/create-validation.dto';
import { CurrentUser } from '../auth/user.decorator';
import { Validation } from './entities/validation.entity';
import { GetValidationsDto } from './dto/get-validations.dto';
import { UserPayload } from '../auth/interface/user-payload';
import { ValidationList } from './dto/validation-list';
import { ValidationKind } from './entities/validationKind.entity';
import { UpdateValidationKindDto } from './dto/update-validation-kind.dto';

@Resolver()
export class ValidationResolver {
  constructor(private validationService: ValidationService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Validation)
  async createValidation(
    @Args('data') data: CreateValidationDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.validationService.create(user, data);
  }
  @UseGuards(JwtAuthGuard)
  @Mutation(() => ValidationKind)
  async updateValidationKind(
    @Args('data') data: UpdateValidationKindDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.validationService.updateValidationKind(user, data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Validation)
  async completeValidation(
    @Args('validationId') validationId: string,
    @Args('documentId', { nullable: true }) documentId: string,
    @Args('documentLink', { nullable: true }) documentLink: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.validationService.complete(
      user,
      validationId,
      documentId,
      documentLink,
    );
  }

  @Query(() => ValidationList)
  @UseGuards(JwtAuthGuard)
  async getValidations(
    @Args('data') data: GetValidationsDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.validationService.getValidations(data, user);
  }
  @Query(() => [ValidationKind])
  @UseGuards(JwtAuthGuard)
  async getValidationKinds(@CurrentUser() user: UserPayload) {
    return this.validationService.getValidationKinds(user);
  }
}
