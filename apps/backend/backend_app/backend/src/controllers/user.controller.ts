import { Controller, Get, Post, Delete, Put, Patch, Param, Body, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from "../entities/users.entity";
import { UserDto } from "../dtos/users.dto";
import { ResponseUserDto } from "../dtos/response_user.dto";
import { ApiResponse } from '@nestjs/swagger'; // 追加: ApiResponseをインポート

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getRoot(): {} {
    return this.userService.getUser();
  }

  @Get('all')
  @ApiResponse({ status: HttpStatus.OK, type: ResponseUserDto , isArray: true })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: ResponseUserDto })
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post('signup')
  @ApiResponse({ status: HttpStatus.CREATED, type: ResponseUserDto })
  postSignup(@Body() createUserDto: UserDto): Promise<ResponseUserDto> {
    return this.userService.create(createUserDto);
  }

  @Put(":id")
  @ApiResponse({ status: HttpStatus.OK, type: ResponseUserDto })
  async update(
    @Param("id") id: number,
    @Body() updateUserDto: UserDto,
  ): Promise<ResponseUserDto | null> {
    return this.userService.update(id, updateUserDto);
  }
  
  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'delete user' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
