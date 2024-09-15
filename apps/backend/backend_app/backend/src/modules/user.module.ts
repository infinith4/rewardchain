import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';
import { ProfileRepository } from '../repositories/profile.repository';
import { DisputationRepository } from '../repositories/disputation.repository';
import { TaskRepository } from '../repositories/task.repository';
import { TaskCommentRepository } from '../repositories/task_comment.repository';
import { TaskItemRepository } from '../repositories/task_item.repository';
import { UserController } from '../controllers/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    UserRepository,
    ProfileRepository,
    DisputationRepository,
    TaskRepository,
    TaskCommentRepository,
    TaskItemRepository
  ])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}