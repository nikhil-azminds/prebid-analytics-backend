import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Bidder } from './bidder.entity';

@Entity()
export class ParamType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => Bidder, (bid) => bid.adParams, { eager: false })
  bidder: Bidder;
}
