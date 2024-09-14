import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Length } from "class-validator";

export class ProfileDto {

  @ApiProperty()
  @IsInt()
  user_id: number;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  specification: string;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  bio: string;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  website: string;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  email: string;

  @ApiProperty()
  @IsString()
  @Length(1, 1000)
  hashed_password: string;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  created_at: Date;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  updated_at: Date;
}