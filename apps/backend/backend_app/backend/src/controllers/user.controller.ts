import { Controller, Get, Post, Delete, Put, Patch, Param, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from "../entities/users.entity";
import { UserDto } from "../dtos/users.dto";

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getRoot(): {} {
    return this.userService.getUser();
  }
  @Get('/all')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }
  @Post('/signup')
  postSignup(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateUserDto: UserDto,
  ): Promise<User | null> {
    return this.userService.update(id, updateUserDto);
  }
  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
