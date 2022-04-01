import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Enterprise {
  @PrimaryGeneratedColumn('uuid')
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
