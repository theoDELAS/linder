import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  description: string;

  @ManyToMany(() => Tag, (tag) => tag.candidates, {
    cascade: true,
  })
  @JoinTable()
  tags: Tag[];

  @Column()
  netSalaryRequested: number;

  @Column()
  wantedOffer: string;
}
