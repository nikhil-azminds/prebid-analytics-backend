import { Logger, InternalServerErrorException } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { CreateBidderDto } from './dto/create-bidder.dto';
import { Bidder } from './bidder.entity';

@EntityRepository(Bidder)
export class BidderRepository extends Repository<Bidder> {
  private logger = new Logger('BidderRepository');

  async getBidders() {
    const query = this.createQueryBuilder('bidder');

    try {
      const bidders = await query.getMany();
      return bidders;
    } catch (err) {
      this.logger.error(`Failed to get bidders `, err.stack);
      throw new InternalServerErrorException();
    }
  }

  async createBidder(createBidderDto: CreateBidderDto) {
    const { name, email } = createBidderDto;
    const bidder = new Bidder();
    bidder.name = name;
    bidder.email = email;

    try {
      await bidder.save();
    } catch (err) {
      this.logger.error(
        `Failed to create bidder, Data: ${JSON.stringify(createBidderDto)}`,
        err.stack,
      );
      throw new InternalServerErrorException();
    }

    return bidder;
  }
}
