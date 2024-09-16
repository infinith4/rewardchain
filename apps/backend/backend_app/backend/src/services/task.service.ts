import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TaskDto } from '../dtos/tasks.dto';
import { Disputation } from '../entities/disputations.entity';
import { Task } from '../entities/tasks.entity'; // 追加
import { TaskComment } from '../entities/task_comments.entity'; // 追加
import { TaskItem } from '../entities/task_items.entity'; // 追加

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Disputation)
    private readonly disputationRepository: Repository<Disputation>,
    @InjectRepository(Task) // 追加
    private readonly taskRepository: Repository<Task>, // 追加
    @InjectRepository(TaskComment) // 追加
    private readonly taskCommentRepository: Repository<TaskComment>, // 追加
    @InjectRepository(TaskItem) // 追加
    private readonly taskItemRepository: Repository<TaskItem>, // 追加
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
  
  async findOne(id: number): Promise<Task | null> {
    return this.taskRepository.findOne({ where: { id } }) || null;
  }

  async create(taskDto: TaskDto): Promise<Task> {
    const task = this.taskRepository.create(taskDto);
    const savedTask = await this.taskRepository.save(task);
    return savedTask;
  }

  async update(id: number, task: TaskDto): Promise<Task | null> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOne({ where: { id } }) || null;
  }

  async delete(id: number): Promise<void> {
    // 関連する disputations を削除
    await this.disputationRepository.delete({ task_id: id });
    // 関連する task_comments, task_items を削除
    const tasks = await this.taskRepository.find({ where: { id: id } });
    for (const task of tasks) {
      await this.taskCommentRepository.delete({ task_id: task.id });
      await this.taskItemRepository.delete({ task_id: task.id });
    }
    // 関連する tasks を削除
    await this.taskRepository.delete({ id: id });
    // ユーザーを削除
    await this.taskRepository.delete(id);
  }

  getTask(id: string = ""): { msg: string } {
    return { msg: `task${id}` };
  }
}
