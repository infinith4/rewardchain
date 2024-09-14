import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './profiles.entity'; // 追加

const userClass = ['client', 'supplier', 'arbitrator', 'patron'] as const;
export type UserClass = typeof userClass[number];

// export enum UserClass {
//   CLIENT = 'client',
//   SUPPLIER = 'supplier',
//   ARBITRATOR = 'arbitrator',
//   PATRON = 'patron',
// }

@Entity('users')
@Index('ui_users_id', ['id'], { unique: true })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
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

  @OneToOne(() => Profile, profile => profile.user) // 追加
  //@JoinColumn() // 変更
  profile: Profile; // 追加
}