import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

import { User } from "../entities/users.entity";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { Disputation } from '../entities/disputations.entity'; // 追加
import { Task } from '../entities/tasks.entity'; // 追加
import { TaskComment } from 'src/entities/task_comments.entity';
import { TaskItem } from 'src/entities/task_items.entity';
import { Profile } from 'src/entities/profiles.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "db",
      port: 3306,
      username: "root",
      password: "root",
      database: "rewardchaindb",
      entities: [User, Profile, Task, TaskComment, TaskItem, Disputation], // 追加
      synchronize: false,
      retryAttempts: 3,
    }),
    TypeOrmModule.forFeature([User, Profile, Task, TaskComment, TaskItem, Disputation]), // 追加
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}