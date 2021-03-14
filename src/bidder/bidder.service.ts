import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BidderEntity } from './bidder.entity';
import { AdParamEntity } from '../ad-param/ad-param.entity';
import { CreateBidderDto } from './dto/create-ad-bidder.dto';

@Injectable()
export class BidderService {
  constructor(
    @InjectRepository(BidderEntity)
    private readonly bidderRepository: Repository<BidderEntity>,
    @InjectRepository(AdParamEntity)
    private readonly adParamRepository: Repository<AdParamEntity>,
  ) {}

  async createBidder(createBidderDto: CreateBidderDto): Promise<BidderEntity> {
    const bidder = new BidderEntity();
    bidder.email = createBidderDto.email;
    bidder.name = createBidderDto.name;
    const newBidder = await this.bidderRepository.save(bidder);

    for (const param of createBidderDto.adParams) {
      const adParam = new AdParamEntity();
      adParam.name = param.name;
      adParam.bidder = bidder;
      await this.adParamRepository.save(adParam);

      // bidder.adParams.push(adParam);
    }

    return newBidder;
  }
}
