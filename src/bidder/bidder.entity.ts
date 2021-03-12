import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { ParamType } from './ad-params.entity';

@Entity()
export class Bidder extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany((type) => ParamType, (paramType) => paramType.bidder, {
    eager: true,
  })
  adParams: ParamType[];
}
