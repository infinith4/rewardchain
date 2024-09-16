import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TaskCommentDto } from '../dtos/task_comments.dto'; // 追加
import { TaskComment } from '../entities/task_comments.entity'; // 追加

@Injectable()
export class TaskCommentService {
  constructor(
    @InjectRepository(TaskComment)
    private readonly taskCommentRepository: Repository<TaskComment>, // 変更: TaskCommentリポジトリを使用
  ) {}

  async findAll(): Promise<TaskComment[]> {
    return this.taskCommentRepository.find();
  }

  async findOne(id: number): Promise<TaskComment | null> {
    return this.taskCommentRepository.findOne({ where: { id } }) || null;
  }

  async create(taskCommentDto: TaskCommentDto): Promise<TaskComment> {
    const taskComment = this.taskCommentRepository.create(taskCommentDto);
    return this.taskCommentRepository.save(taskComment);
  }

  async update(id: number, taskCommentDto: TaskCommentDto): Promise<TaskComment | null> {
    await this.taskCommentRepository.update(id, taskCommentDto);
    return this.taskCommentRepository.findOne({ where: { id } }) || null;
  }

  async delete(id: number): Promise<void> {
    await this.taskCommentRepository.delete(id);
  }
}
