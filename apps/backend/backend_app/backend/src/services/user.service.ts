import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): { msg: string } {
    return { msg: 'user1' };
  }
}
