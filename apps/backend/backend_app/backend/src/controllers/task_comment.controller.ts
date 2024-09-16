import { Controller, Get, Post, Delete, Put, Patch, Param, Body } from '@nestjs/common';
import { TaskCommentService } from '../services/task_comment.service';
import { TaskComment } from "../entities/task_comments.entity";
import { TaskCommentDto } from "../dtos/task_comments.dto";

@Controller('/api/task_comments')
export class TaskCommentController { // 変更: クラス名を変更
  constructor(private readonly taskCommentService: TaskCommentService) {} // 変更: サービス名を変更

  @Get()
  async findAll(): Promise<TaskComment[]> { // 変更: メソッド名を変更
    return this.taskCommentService.findAll();
  }

  @Get(':id')
  async getComment(@Param('id') id: number): Promise<TaskComment> { // 変更: メソッド名を変更
    return this.taskCommentService.findOne(id);
  }

  @Post('create')
  async createComment(@Body() createTaskCommentDto: TaskCommentDto): Promise<TaskComment> { // 変更: メソッド名を変更
    return this.taskCommentService.create(createTaskCommentDto);
  }

  @Put(":id")
  async update( // 変更: メソッド名を変更
    @Param("id") id: number,
    @Body() updateTaskCommentDto: TaskCommentDto,
  ): Promise<TaskComment | null> {
    return this.taskCommentService.update(id, updateTaskCommentDto);
  }
  
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> { // 変更: メソッド名を変更
    return this.taskCommentService.delete(id);
  }
}
