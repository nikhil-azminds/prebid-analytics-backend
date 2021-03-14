import { IsString } from 'class-validator';

export class CreateAdSiteDto {
  @IsString()
  readonly website: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly contact: string;

  @IsString()
  readonly AdBidders: string;

  // @IsString({ each: true })
  // readonly siteGranularity: string[];

  @IsString({ each: true })
  readonly schainConfig: string[];

  @IsString()
  readonly countries: string;

  @IsString()
  readonly currency: string;

  @IsString()
  readonly enableAnalytics: boolean;
}
