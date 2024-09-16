import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Length } from "class-validator";

export class TaskCommentDto {
  
  @ApiProperty()
  @IsInt()
  task_id: number; // タスクID

  @ApiProperty()
  @IsInt()
  user_id: number; // ユー��ーID

  @ApiProperty()
  @IsString()
  @Length(1, 500)
  comment: string; // コメント内容

  @ApiProperty()
  @IsString()
  created_at: Date; // 作成日時

  @ApiProperty()
  @IsString()
  updated_at: Date; // 更新日時
}