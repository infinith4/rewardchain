import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Length } from "class-validator";
import { UserClass } from "src/entities/users.entity";

export class ResponseUserDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  user_type: UserClass;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  first_name: string;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  last_name: string;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  username: string;

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
  @Length(1, 1000)
  avatar_url: string;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  last_login_at: Date;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  created_at: Date;

  @ApiProperty()
  @IsString()
  @Length(1, 30)
  updated_at: Date;
}