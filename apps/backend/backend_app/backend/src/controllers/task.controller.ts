import { Controller, Get, Post, Delete, Put, Patch, Param, Body } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { Task } from "../entities/tasks.entity";
import { TaskDto } from "../dtos/tasks.dto";

@Controller('/api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getRoot(): {} {
    return this.taskService.getTask();
  }

  @Get('all')
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async getTask(@Param('id') id: number): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Post('create')
  postSignup(@Body() createTaskDto: TaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateTaskDto: TaskDto,
  ): Promise<Task | null> {
    return this.taskService.update(id, updateTaskDto);
  }
  
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.taskService.delete(id);
  }
}
