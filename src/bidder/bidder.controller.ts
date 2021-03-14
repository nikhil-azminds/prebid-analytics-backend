import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Logger,
} from '@nestjs/common';
import { BidderEntity } from './bidder.entity';
import { BidderService } from './bidder.service';
import { CreateBidderDto } from './dto/create-ad-bidder.dto';
import { UpdateBiddersDto } from './dto/update-ad-bidder.dto';

@Controller('bidder')
export class BidderController {
  private logger = new Logger('BidderController');

  constructor(private bidderService: BidderService) {}

  @Post()
  createBidder(
    @Body() createAdBiddersDto: CreateBidderDto,
  ): Promise<BidderEntity> {
    this.logger.verbose(
      `creating a new task. Data: ${JSON.stringify(createAdBiddersDto)}`,
    );
    return this.bidderService.createBidder(createAdBiddersDto);
  }
}
