import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthPayload } from '../interfaces/authPayload';
import { SendResetDto } from './dto/send-reset.dto';
import { CurrentUser } from './user.decorator';
import { UserPayload } from './interface/user-payload';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async login(@Args('data') data: LoginDto) {
    return this.authService.login(data);
  }

  @Mutation(() => AuthPayload)
  async checkToken(@Args('token') token: string) {
    return this.authService.checkToken(token);
  }

  @Mutation(() => AuthPayload)
  // @UseGuards(JwtAuthGuard)
  async sendResetPassword(@Args('data') data: SendResetDto) {
    return this.authService.sendResetPassword(data);
  }
}
