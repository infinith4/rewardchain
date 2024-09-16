import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TaskItemDto } from '../dtos/task_items.dto'; // 追加
import { TaskItem } from '../entities/task_items.entity'; // 追加

@Injectable()
export class TaskItemService {
  constructor(
    @InjectRepository(TaskItem)
    private readonly taskItemRepository: Repository<TaskItem>, // TaskItemリポジトリを使用
  ) {}

  async findAll(): Promise<TaskItem[]> {
    return this.taskItemRepository.find();
  }

  async findOne(id: number): Promise<TaskItem | null> {
    return this.taskItemRepository.findOne({ where: { id } }) || null;
  }

  async create(taskItemDto: TaskItemDto): Promise<TaskItem> {
    const taskItem = this.taskItemRepository.create(taskItemDto);
    return this.taskItemRepository.save(taskItem);
  }

  async update(id: number, taskItemDto: TaskItemDto): Promise<TaskItem | null> {
    await this.taskItemRepository.update(id, taskItemDto);
    return this.taskItemRepository.findOne({ where: { id } }) || null;
  }

  async delete(id: number): Promise<void> {
    await this.taskItemRepository.delete(id);
  }
  getTaskItem(id: string = ""): { msg: string } {
    return { msg: `taskitem${id}` };
  }
}
