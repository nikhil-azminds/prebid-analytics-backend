import { Module } from '@nestjs/common';
import { AdUnitController } from './ad-unit.controller';
import { AdUnitService } from './ad-unit.service';

@Module({
  controllers: [AdUnitController],
  providers: [AdUnitService],
})
export class AdUnitModule {}
