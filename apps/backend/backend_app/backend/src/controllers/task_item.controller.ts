import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { TaskItemService } from '../services/task_item.service';
import { TaskItem } from "../entities/task_items.entity";
import { TaskItemDto } from "../dtos/task_items.dto";

@Controller('/api/task_items')
export class TaskItemController {
  constructor(private readonly taskItemService: TaskItemService) {}

  @Get()
  getRoot(): {} {
    return this.taskItemService.getTaskItem();
  }
  @Get('all')
  async findAll(): Promise<TaskItem[]> {
    return this.taskItemService.findAll();
  }

  @Get(':id')
  async getItem(@Param('id') id: number): Promise<TaskItem> {
    return this.taskItemService.findOne(id);
  }

  @Post('create')
  async createItem(@Body() createTaskItemDto: TaskItemDto): Promise<TaskItem> {
    return this.taskItemService.create(createTaskItemDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateTaskItemDto: TaskItemDto,
  ): Promise<TaskItem | null> {
    return this.taskItemService.update(id, updateTaskItemDto);
  }
  
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.taskItemService.delete(id);
  }
}
