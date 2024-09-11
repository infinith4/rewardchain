

dbmlファイルからテーブルごとにentityファイルを生成してください。

以下は、`dbml` ファイルから生成された各テーブルの `entity` ファイルです。


### `tasks.entity.ts`
```typescript:backend/src/entities/tasks.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

export enum TaskStatus {
  NEW_TASK = 'new_task',
  PROCESSING = 'processing',
  REVIEW = 'review',
  COMPLETED = 'completed',
  PENDING = 'pending',
  CANCELLED = 'cancelled',
}

@Entity('tasks')
@Index('ui_tasks_id', ['id'], { unique: true })
@Index('idx_task_items_comment_id', ['comment_id'])
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  user_id: number;

  @Column({ type: 'enum', enum: TaskStatus, nullable: false })
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
```


### `task_comments.entity.ts`
```typescript:backend/src/entities/task_comments.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('task_comments')
@Index('idx_task_comments_task_id', ['task_id'])
export class TaskComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  task_id: number;

  @Column({ type: 'varchar', nullable: false })
  comment: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}
```



### `task_items.entity.ts`
```typescript:backend/src/entities/task_items.entity.ts
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

  @Column({ type: 'enum', enum: TaskStatus, nullable: false })
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
```



### `users.entity.ts`
```typescript:backend/src/entities/users.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

export enum UserClass {
  CLIENT = 'client',
  SUPPLIER = 'supplier',
  ARBITRATOR = 'arbitrator',
  PATRON = 'patron',
}

@Entity('users')
@Index('ui_users_id', ['id'], { unique: true })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: UserClass })
  user_type: UserClass;

  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar' })
  last_name: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  username: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  hashed_password: string;

  @Column({ type: 'varchar', nullable: true })
  avatar_url: string;

  @CreateDateColumn({ type: 'datetime' })
  last_login_at: Date;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}
```



### `profiles.entity.ts`
```typescript:backend/src/entities/profiles.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('profiles')
@Index('ui_profiles_id', ['id'], { unique: true })
@Index('idx_profiles_user_id', ['user_id'], { unique: true })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  user_id: number;

  @Column({ type: 'varchar', nullable: true })
  specification: string;

  @Column({ type: 'varchar', nullable: true })
  bio: string;

  @Column({ type: 'varchar', nullable: true })
  website: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}
```


### `disputations.entity.ts`
```typescript:backend/src/entities/disputations.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

export enum ValidationStatus {
  DISPUTE = 'dispute',
  PROCESSING = 'processing',
  VALIDATED = 'validated',
  COMPLETED = 'completed',
}

@Entity('disputations')
@Index('ui_disputations_id', ['id'], { unique: true })
@Index('idx_disputations_user_id', ['user_id'])
export class Disputation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  task_id: number;

  @Column({ type: 'enum', enum: ValidationStatus, nullable: false })
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
```


これらのエンティティファイルを使用して、データベースとのやり取りを行うことができます。