import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from '../services/task.service';
import { TaskRepository } from '../repositories/task.repository';
import { ProfileRepository } from '../repositories/profile.repository';
import { DisputationRepository } from '../repositories/disputation.repository';
import { TaskCommentRepository } from '../repositories/task_comment.repository';
import { TaskItemRepository } from '../repositories/task_item.repository';
import { TaskController } from '../controllers/task.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    TaskRepository,
    ProfileRepository,
    DisputationRepository,
    TaskRepository,
    TaskCommentRepository,
    TaskItemRepository
  ])],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}