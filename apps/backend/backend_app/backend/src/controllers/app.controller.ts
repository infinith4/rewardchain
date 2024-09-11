import { Controller, Get, Post, Delete, Put, Patch } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { debug } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): string {
    return this.appService.getHello();
  }
  @Get('/hello')
  getHello(): {message: string} {
    console.debug("get" + new Date().toISOString());
    return {
      message: this.appService.getHello()
    }
  }
  @Post('/hello')
  postHello(): {message: string} {
    console.debug("post" + new Date().toISOString());
    return {
      message: this.appService.getHello()
    }
  }
  @Put('/hello')
  putHello(): {message: string} {
    console.debug("put" + new Date().toISOString());
    return {
      message: this.appService.getHello()
    }
  }
  @Patch('/hello')
  patchHello(): {message: string} {
    console.debug("patch" + new Date().toISOString());
    return {
      message: this.appService.getHello()
    }
  }
  @Delete('/hello')
  deleteHello(): {message: string} {
    console.debug("delete" + new Date().toISOString());
    return {
      message: this.appService.getHello()
    }
  }
}
