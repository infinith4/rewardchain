import { Repository } from 'typeorm';
import { Task } from '../entities/tasks.entity';

export class TaskRepository extends Repository<Task> {}