import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Length } from "class-validator";
import { TaskStatus } from "../entities/tasks.entity";

export class TaskItemDto {
  
  @ApiProperty()
  @IsInt()
  user_id: number; // ユー��ーID

  @ApiProperty()
  @IsInt()
  task_id: number; // タスクID

  @ApiProperty()
  @IsString()
  status: TaskStatus;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  title: string; // タイトル

  @ApiProperty()
  @IsString()
  description: string; // 説明

  @ApiProperty()
  @IsInt()
  supplier_id: number;

  @ApiProperty()
  @IsString()
  due_date: Date;

  @ApiProperty()
  @IsString()
  created_at: Date; // 作成日時

  @ApiProperty()
  @IsString()
  updated_at: Date; // 更新日時
}