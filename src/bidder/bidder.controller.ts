import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { Bidder } from './bidder.entity';
import { BidderService } from './bidder.service';
import { CreateBidderDto } from './dto/create-bidder.dto';

@Controller('bidder')
export class BidderController {
  private logger = new Logger('TasksController');

  constructor(private bidderService: BidderService) {}

  @Get()
  getBidders(): Promise<Bidder[]> {
    this.logger.verbose(`retrieving all bidders.`);
    return this.bidderService.getBidders();
  }

  @Post()
  createBidder(@Body() createTaskDto: CreateBidderDto): Promise<Bidder> {
    this.logger.verbose(
      `creating a new task. Data: ${JSON.stringify(createTaskDto)}`,
    );
    return this.bidderService.createBidder(createTaskDto);
  }
}
