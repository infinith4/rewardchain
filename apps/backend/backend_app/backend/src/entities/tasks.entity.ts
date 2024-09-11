import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

const taskStatus = ['new_task', 'processing', 'review', 'completed', 'pending', 'cancelled'] as const;
type TaskStatus = typeof taskStatus[number];

// export enum TaskStatus {
//   NEW_TASK = 'new_task',
//   PROCESSING = 'processing',
//   REVIEW = 'review',
//   COMPLETED = 'completed',
//   PENDING = 'pending',
//   CANCELLED = 'cancelled',
// }

@Entity('tasks')
@Index('ui_tasks_id', ['id'], { unique: true })
@Index('idx_task_items_comment_id', ['comment_id'])
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  user_id: number;

  @Column({ type: 'varchar', nullable: false })
  status: TaskStatus;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  supplier_id: number;

  @Column({ type: 'int', nullable: true })
  comment_id: number;

  @Column({ type: 'datetime', nullable: false })
  due_date: Date;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}
