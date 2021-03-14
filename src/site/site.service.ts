import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SiteEntity } from './site.entity';
import { CreateAdSiteDto } from './dto/create-ad-site.dto';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(SiteEntity)
    private readonly siteRepository: Repository<SiteEntity>,
  ) {}

  async createSite(createAdSiteDto: CreateAdSiteDto): Promise<SiteEntity> {
    const site = new SiteEntity();
    site.email = createAdSiteDto.email;
    site.name = createAdSiteDto.name;
    const newSite = await this.siteRepository.save(site);

    return newSite;
  }
}
