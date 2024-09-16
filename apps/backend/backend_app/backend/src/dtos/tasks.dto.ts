import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Length } from "class-validator";
import { TaskStatus } from "src/entities/tasks.entity";

export class TaskDto {

  @ApiProperty()
  @IsInt()
  user_id: number;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  status: TaskStatus;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  title: string;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  description: string;

  @ApiProperty()
  @IsInt()
  supplier_id: number;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  due_date: Date;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  created_at: Date;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  updated_at: Date;
}