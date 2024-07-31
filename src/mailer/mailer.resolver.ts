import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MailerService } from './mailer.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Booking } from 'src/booking/entities/booking.entity';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class MailerResolver {
  constructor(private readonly mailerService: MailerService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  sendContract(
    @CurrentUser() user: UserPayload,
    @Args('fileName') fileName: string,
    @Args('bookingId') bookingId: string,
  ) {
    return this.mailerService.sendContract(user, fileName, bookingId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Booking)
  sendProposal(
    @CurrentUser() user: UserPayload,
    @Args('fileName') fileName: string,
    @Args('bookingId') bookingId: string,
  ) {
    return this.mailerService.sendProposal(user, fileName, bookingId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  sendInvoice(
    @CurrentUser() user: UserPayload,
    @Args('fileName') fileName: string,
    @Args('bookingId') bookingId: string,
  ) {
    return this.mailerService.sendInvoice(user, fileName, bookingId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  sendConvention(
    @CurrentUser() user: UserPayload,
    @Args('fileName') fileName: string,
    @Args('bookingId') bookingId: string,
  ) {
    return this.mailerService.sendConvention(user, fileName, bookingId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  sendInstallation(
    @CurrentUser() user: UserPayload,
    @Args('fileName') fileName: string,
    @Args('bookingId') bookingId: string,
  ) {
    return this.mailerService.sendInstallation(user, fileName, bookingId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  sendDocument(
    @CurrentUser() user: UserPayload,
    @Args('documentId') documentId: string,
  ) {
    return this.mailerService.sendDocument(user, documentId);
  }
}
