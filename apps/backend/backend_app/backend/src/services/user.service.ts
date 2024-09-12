import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDTO } from '../dtos/users.dto';
import { User } from "../entities/users.entity";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  
  async findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } }) || null;
  }

  getUser(id: string = ""): { msg: string } {
    return { msg: `user${id}` };
  }
}
