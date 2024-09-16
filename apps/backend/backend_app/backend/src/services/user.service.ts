import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDto } from '../dtos/users.dto';
import { ResponseUserDto } from '../dtos/response_user.dto';
import { User } from "../entities/users.entity";
import { Disputation } from '../entities/disputations.entity';
import { Task } from '../entities/tasks.entity'; // 追加
import { TaskComment } from '../entities/task_comments.entity'; // 追加
import { TaskItem } from '../entities/task_items.entity'; // 追加
import { Profile } from '../entities/profiles.entity'; // 追加

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile) // 追加
    private readonly profileRepository: Repository<Profile>, // 追加
    @InjectRepository(Disputation)
    private readonly disputationRepository: Repository<Disputation>,
    @InjectRepository(Task) // 追加
    private readonly taskRepository: Repository<Task>, // 追加
    @InjectRepository(TaskComment) // 追加
    private readonly taskCommentRepository: Repository<TaskComment>, // 追加
    @InjectRepository(TaskItem) // 追加
    private readonly taskItemRepository: Repository<TaskItem>, // 追加
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } }) || null;
  }

  async create(userDto: UserDto): Promise<ResponseUserDto> {
    const user = this.userRepository.create(userDto);
    
    // プロファイルを作成
    const profile = new Profile();
    profile.specification = "specification01";
    profile.bio = "bio01";
    profile.website = "website01";
    profile.email = "email01";
    user.profile = profile; // 変更

    const savedUser = await this.userRepository.save(user);
    // const savedProfile = await this.profileRepository.save(profile);
    let responseUserDto = new ResponseUserDto();
    responseUserDto.id = savedUser.id;
    responseUserDto.user_type = savedUser.user_type;
    responseUserDto.first_name = savedUser.first_name;
    responseUserDto.last_name = savedUser.last_name;
    responseUserDto.username = savedUser.username;
    responseUserDto.email = savedUser.email;
    responseUserDto.hashed_password = savedUser.hashed_password;
    responseUserDto.avatar_url = savedUser.avatar_url;
    responseUserDto.last_login_at = savedUser.last_login_at;
    responseUserDto.created_at = savedUser.created_at;
    responseUserDto.updated_at = savedUser.updated_at;

    return responseUserDto;
  }

  async update(id: number, user: UserDto): Promise<ResponseUserDto | null> {
    await this.userRepository.update(id, user);
    let userFindOne = await this.userRepository.findOne({ where: { id } }) || null;
    let responseUserDto = new ResponseUserDto();
    responseUserDto.id = userFindOne.id;
    responseUserDto.user_type = userFindOne.user_type;
    responseUserDto.first_name = userFindOne.first_name;
    responseUserDto.last_name = userFindOne.last_name;
    responseUserDto.username = userFindOne.username;
    responseUserDto.email = userFindOne.email;
    responseUserDto.hashed_password = userFindOne.hashed_password;
    responseUserDto.avatar_url = userFindOne.avatar_url;
    responseUserDto.last_login_at = userFindOne.last_login_at;
    responseUserDto.created_at = userFindOne.created_at;
    responseUserDto.updated_at = userFindOne.updated_at;

    return responseUserDto;
  }

  async delete(id: number): Promise<void> {
    // 関連する disputations を削除
    await this.disputationRepository.delete({ user_id: id });
    // 関連する task_comments, task_items を削除
    const tasks = await this.taskRepository.find({ where: { user_id: id } });
    for (const task of tasks) {
      await this.taskCommentRepository.delete({ task_id: task.id });
      await this.taskItemRepository.delete({ task_id: task.id });
    }
    // 関連する tasks を削除
    await this.taskRepository.delete({ user_id: id });
    // ユーザーを削除
    await this.userRepository.delete(id);
  }

  getUser(id: string = ""): { msg: string } {
    return { msg: `user${id}` };
  }
}
