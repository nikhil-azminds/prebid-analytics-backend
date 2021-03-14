import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BidderModule } from './bidder/bidder.module';
import { AdParamModule } from './ad-param/ad-param.module';
import { SiteModule } from './site/site.module';
import { AdUnitModule } from './ad-unit/ad-unit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BidderModule,
    AdParamModule,
    SiteModule,
    AdUnitModule,
  ],
})
export class AppModule {}
