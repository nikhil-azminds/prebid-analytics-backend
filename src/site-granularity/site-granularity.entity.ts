import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SiteEntity } from '../site/site.entity';

@Entity()
export class SGranularityEntity {
  @PrimaryGeneratedColumn() // for primary key
  id: number;

  @Column()
  minimun: string;

  @Column()
  maxumum: string;

  @Column()
  increment: string;

  @ManyToOne((type) => SiteEntity, (site) => site.siteGranularity)
  site: SiteEntity;
}
