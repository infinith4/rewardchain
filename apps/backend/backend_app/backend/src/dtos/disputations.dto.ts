import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Length } from "class-validator";
import { ValidationStatus } from "../entities/disputations.entity";


export class DisputationDto {
  
  @ApiProperty()
  @IsInt()
  task_id: number; // タスクID

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  status: ValidationStatus;

  @ApiProperty()
  @IsString()
  @Length(1, 255)
  title: string; // タイトル

  @ApiProperty()
  @IsString()
  @Length(1, 500)
  description: string; // 説明

  @ApiProperty()
  @IsInt()
  user_id: number; // ユーザーID

  @ApiProperty()
  @IsInt()
  arbitrator_id?: number; // 仲裁者ID（オプション）

  @ApiProperty()
  created_at: Date; // 作成日時

  @ApiProperty()
  updated_at: Date; // 更新日時
}