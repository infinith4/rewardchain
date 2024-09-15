import { Repository } from 'typeorm';
import { TaskComment } from '../entities/task_comments.entity';

export class TaskCommentRepository extends Repository<TaskComment> {}