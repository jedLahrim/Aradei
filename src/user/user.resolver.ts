import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserProfileDto } from './dto/create-userProfile.dto';
import { GetTeamDto } from './dto/get-team.dto';
import { UserProfile } from './entities/userProfile.entity';
import { AuthPayload } from '../interfaces/authPayload';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Contact } from 'src/contact/entities/contact.entity';
import { UpdateUserProfileDto } from './dto/update-userProfile.dto';
import { UserPayload } from '../auth/interface/user-payload';
import { AppError } from '../common/error/app-error';
import { ERR_UNAUTHORIZED } from '../common/error/error-code';
import { UserRole } from './entities/userRole.entity';
import { CreateUserRoleDto } from './dto/create-userRole.dto';
import { Permission } from './entities/permission.entity';
import { UpdateUserRoleDto } from './dto/update-userRole.dto';
import { ResetDto } from './dto/reset.dto';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [UserProfile])
  async getUsers(
    @CurrentUser() user: UserPayload,
    @Args('data') data: GetTeamDto,
  ) {
    return this.userService.getUsers(user, data);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [UserRole])
  async getUserRoles(@CurrentUser() user: UserPayload) {
    return this.userService.getUserRoles(user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Contact)
  async getLeadBookings(@CurrentUser() user: UserPayload) {
    return this.userService.getLeadBookings(user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => AuthPayload)
  async signupUser(
    @Args('data') data: CreateUserProfileDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.userService.registerUser(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserProfile)
  async updateUser(
    @Args('data') data: UpdateUserProfileDto,
    @CurrentUser() user: UserPayload,
  ) {
    if (user.level !== 1)
      throw new UnauthorizedException(new AppError(ERR_UNAUTHORIZED));

    return this.userService.updateUser(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserRole)
  async createUserRole(
    @Args('data') data: CreateUserRoleDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.userService.createUserRole(data);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Mutation(() => Boolean)
  async suspendUser(@Args('id') id: string) {
    return this.userService.suspendUser(id);
  }

  @Mutation(() => Boolean)
  async reactivateUser(@Args('id') id: string) {
    return this.userService.reactivateUser(id);
  }

  @Query(() => UserProfile)
  async getUser(@Args('id') id: string) {
    return this.userService.getUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Permission])
  async getAllPermissions(@CurrentUser() user: UserPayload) {
    return this.userService.getAllPermissions(user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserRole)
  async updateUserRole(
    @Args('data') data: UpdateUserRoleDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.userService.updateUserRole(data);
  }

  @Mutation(() => UserProfile)
  // @UseGuards(JwtAuthGuard)
  async resetPassword(@Args('data') data: ResetDto) {
    return this.userService.resetPassword(data);
  }
}
