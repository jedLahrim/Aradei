import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { ExportQuoteDto } from './dto/export-quote.dto';
import { Response } from 'express';
import { BookingService } from './booking.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post('quotes/export')
  @UseGuards(JwtAuthGuard)
  async exportQuote(@Body() dto: ExportQuoteDto, @Res() res: Response) {
    return this.bookingService.exportQuote(dto, res);
  }
}
