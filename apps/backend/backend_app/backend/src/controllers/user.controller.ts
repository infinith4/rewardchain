import { Controller, Get, Post, Delete, Put, Patch, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { debug } from 'console';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getRoot(): {} {
    return this.userService.getUser();
  }
  @Get('/:id')
  getUser(@Param('id') id: string): {} {
    return this.userService.getUser();
  }
  @Post('/signup')
  postSignup(): {} {
    return this.userService.getUser();
  }
  @Put('/:id')
  putUser(@Param('id') id: string): {} {
    return this.userService.getUser();
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: string): {} {
    return this.userService.getUser();
  }
}
