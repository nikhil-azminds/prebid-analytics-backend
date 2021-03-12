import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { BidderModule } from './bidder/bidder.module';
import { SiteModule } from './site/site.module';
import { AdUnitModule } from './ad-unit/ad-unit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    TasksModule,
    BidderModule,
    SiteModule,
    AdUnitModule,
  ],
})
export class AppModule {}
