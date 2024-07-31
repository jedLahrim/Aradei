import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Float, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ConfirmQuoteDto } from './dto/confirm-quote.dto';
import { GetBookingsDto } from './dto/get-bookings.dto';
import { Booking } from './entities/booking.entity';
import { BookingService } from './booking.service';
import { BookingList } from './entities/booking-list.entity';
import { Quote } from './entities/quote.entity';
import { Document } from 'src/document/entities/document.entity';
import { CreateQuoteEditDto } from './dto/CreateQuoteEdit.dto';
import { ConfirmHOTDto } from './dto/confirm-hot.dto';
import { ConfirmContractDto } from './dto/confirm-contract.dto';
import { MediaProposalDto } from './dto/mediaProposal.dto';
import { ConfirmInstallationDto } from './dto/confirm-installation.dto';
import { RenewBookingDto } from './dto/renew-booking.dto';
import {
  CreateManualBookingDto,
  UpdateManualBookingDto,
} from './dto/create-manual-booking.dto';
import { UserPayload } from '../auth/interface/user-payload';
import { Invoice } from './entities/invoice.entity';
import { GetQuotesDto } from './dto/get-quotes.dto';
import { QuoteList } from './entities/quoteList.entity';

@Resolver()
export class BookingResolver {
  constructor(private bookingService: BookingService) {}

  @Query(() => BookingList)
  @UseGuards(JwtAuthGuard)
  async getBookings(@Args('data') data: GetBookingsDto) {
    return this.bookingService.getAll(data);
  }

  @Query(() => Booking)
  @UseGuards(JwtAuthGuard)
  async getBooking(
    @Args('bookingId') bookingId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.getOne(bookingId, user);
  }

  @Query(() => Float)
  @UseGuards(JwtAuthGuard)
  async getPipe(@Args('type') type: string) {
    return this.bookingService.getPipe(type);
  }

  @Query(() => Float)
  @UseGuards(JwtAuthGuard)
  async getRevenue(@Args('type') type: string) {
    return this.bookingService.getRevenue(type);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async createManualBooking(
    @Args('data') data: CreateManualBookingDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.createManualBooking(data, user);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async createBooking(
    @Args('data') data: CreateBookingDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.create(data, user);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async removeUnitFromBooking(
    @Args('bookingId') bookingId: string,
    @Args('unitId') unitId: string,
  ) {
    return this.bookingService.removeUnitFromBooking(bookingId, unitId);
  }

  @Mutation(() => String || null)
  @UseGuards(JwtAuthGuard)
  async createQuoteEdit(
    @Args('data') data: CreateQuoteEditDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.createQuoteEdit(data, user);
  }

  @Mutation(() => String || null)
  @UseGuards(JwtAuthGuard)
  async createInvoiceEdit(
    @Args('data') data: CreateQuoteEditDto,
    @CurrentUser() user: any,
  ) {
    return this.bookingService.createInvoiceEdit(data, user);
  }

  @Mutation(() => Quote)
  @UseGuards(JwtAuthGuard)
  async sendQuote(@Args('id') id: string, @CurrentUser() user: UserPayload) {
    return this.bookingService.sendQuote(id, user);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async deleteBooking(
    @Args('id') id: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.deleteBooking(id, user);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async updateManualBooking(
    @Args('data') data: UpdateManualBookingDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.updateManualBooking(data, user);
  }

  @Mutation(() => Invoice)
  @UseGuards(JwtAuthGuard)
  async sendMarjaneInvoice(@Args('id') id: string, @CurrentUser() user: any) {
    return this.bookingService.sendInvoice(id, user);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async confirmQuote(
    @Args('data') data: ConfirmQuoteDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.confirmQuote(data, user);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async confirmContract(
    @Args('data') data: ConfirmContractDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.confirmContract(data, user);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async confirmConvention(
    @Args('data') data: ConfirmContractDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.confirmConvention(data, user);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async renewBooking(
    @Args('data') data: RenewBookingDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.renew(data, user);
  }

  @Mutation(() => Document)
  @UseGuards(JwtAuthGuard)
  async confirmHOT(
    @Args('data') data: ConfirmHOTDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.confirmHOT(data, user);
  }

  @Mutation(() => Document)
  @UseGuards(JwtAuthGuard)
  async confirmInstallation(
    @Args('data') data: ConfirmInstallationDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.confirmInstallation(data, user);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async confirmInvoice(
    @Args('data') data: ConfirmQuoteDto,
    @CurrentUser() user: any,
  ) {
    return this.bookingService.confirmInvoice(data, user);
  }

  @Query(() => [Booking])
  @UseGuards(JwtAuthGuard)
  async getExpirations(
    @Args('days') days: number,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.getExpirations(days, user);
  }

  @Mutation(() => Booking)
  @UseGuards(JwtAuthGuard)
  async addMedia(
    @Args('data') data: MediaProposalDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.bookingService.addMedia(data, user);
  }

  @Query(() => QuoteList)
  @UseGuards(JwtAuthGuard)
  async getQuotes(@Args('filter') filter: GetQuotesDto) {
    return this.bookingService.getQuotes(filter);
  }
}
