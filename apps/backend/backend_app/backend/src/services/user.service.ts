import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(id: string = ""): { msg: string } {
    return { msg: `user${id}` };
  }
}
