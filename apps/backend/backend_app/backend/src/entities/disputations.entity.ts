import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

const validationStatus = ['dispute', 'processing', 'validated', 'completed'] as const;
export type ValidationStatus = typeof validationStatus[number];

@Entity('disputations')
@Index('ui_disputations_id', ['id'], { unique: true })
@Index('idx_disputations_user_id', ['user_id'])
export class Disputation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  task_id: number;

  @Column({ type: 'varchar', nullable: false })
  status: ValidationStatus;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  user_id: number;

  @Column({ type: 'int', nullable: true })
  arbitrator_id: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}