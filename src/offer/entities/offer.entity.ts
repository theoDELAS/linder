import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

export class Offer {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 280 })
  description: string;

  @Column('array')
  keyWord: Array<string>;

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
