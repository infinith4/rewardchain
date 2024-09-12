import { Controller, Get, Post, Delete, Put, Patch, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from "../entities/users.entity";

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
  postSignup(): {} {
    return this.userService.getUser();
  }
  @Put('/:id')
  putUser(@Param('id') id: string): {} {
    return this.userService.getUser(id);
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: string): {} {
    return this.userService.getUser(id);
  }
}
