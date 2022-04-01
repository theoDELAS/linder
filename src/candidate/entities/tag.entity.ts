import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Candidate } from './candidate.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Candidate, (candidate) => candidate.tags, {
    onDelete: 'CASCADE',
  })
  candidates: Candidate[];
}
