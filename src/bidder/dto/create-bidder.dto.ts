import { IsNotEmpty } from 'class-validator';

export class CreateBidderDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;
}
