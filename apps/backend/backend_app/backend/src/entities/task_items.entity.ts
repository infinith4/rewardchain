import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { TaskStatus } from './tasks.entity';

@Entity('task_items')
@Index('ui_task_items_id', ['id'], { unique: true })
@Index('idx_task_items_task_id', ['task_id'])
export class TaskItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  task_id: number;

  @Column({ type: 'int', nullable: false })
  user_id: number;

  @Column({ type: 'enum', enumName: "TaskStatus", nullable: false })
  status: TaskStatus;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  supplier_id: number;

  @Column({ type: 'datetime', nullable: false })
  due_date: Date;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}
