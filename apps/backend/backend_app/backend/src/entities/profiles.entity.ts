import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index, OneToOne, JoinColumn } from 'typeorm';
import { User } from './users.entity'; // 追加

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

  @OneToOne(() => User, user => user.profile, { onDelete: 'CASCADE' }) // 修正
  @JoinColumn({ name: 'user_id' })
  user: User;
}