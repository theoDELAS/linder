import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 280 })
  description: string;

  @Column('text', { array: true })
  keyWord: string[];

  @Column('int')
  salary: number;

  @Column('text')
  type: string;

  @Column('text')
  status: string;

  @Column('boolean')
  isForRecruter: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
