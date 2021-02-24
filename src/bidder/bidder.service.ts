import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { BidderRepository } from './bidder.repository';
import { CreateBidderDto } from './dto/create-bidder.dto';

@Injectable()
export class BidderService {
  constructor(
    @InjectRepository(BidderRepository)
    private bidderRepository: BidderRepository,
  ) {}

  async getBidders() {
    return this.bidderRepository.getBidders();
  }

  async createBidder(createBidderDto: CreateBidderDto) {
    return this.bidderRepository.createBidder(createBidderDto);
  }
}
