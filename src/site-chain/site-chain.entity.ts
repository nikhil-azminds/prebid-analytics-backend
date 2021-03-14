import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SiteEntity } from '../site/site.entity';

@Entity()
export class SChainEntity {
  // for primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  asi: string;

  @Column()
  sid: string;

  @Column()
  hp: string;

  @ManyToOne((type) => SiteEntity, (site) => site.schainConfigs)
  site: SiteEntity;
}
