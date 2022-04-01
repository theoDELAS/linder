import { Offer } from 'src/offer/entities/offer.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Enterprise {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  // @TODO : 9 numbers
  @Column({ unique: true })
  siren: number;

  // @TODO : 280 char max
  @Column()
  description: string;

  @Column()
  logoUrl: string;

  @OneToMany(() => Offer, (offer) => offer.enterprise)
  offers: Offer[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
