import { Repository } from 'typeorm';
import { TaskItem } from '../entities/task_items.entity';

export class TaskItemRepository extends Repository<TaskItem> {}