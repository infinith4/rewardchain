import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from '../controllers/app.controller';
import { UserController } from "../controllers/user.controller";
import { ProfileController } from 'src/controllers/profile.controller';
import { TaskController } from 'src/controllers/task.controller';
import { TaskCommentController } from 'src/controllers/task_comment.controller';
import { TaskItemController } from 'src/controllers/task_item.controller';
import { DisputationController } from 'src/controllers/disputation.controller';

import { AppService } from '../services/app.service';
import { UserService } from "../services/user.service";
import { ProfileService } from "../services/profile.service";
import { TaskService } from 'src/services/task.service';
import { TaskCommentService } from 'src/services/task_comment.service';
import { TaskItemService } from 'src/services/task_item.service';
import { DisputationService } from 'src/services/disputation.service';

import { User } from "../entities/users.entity";
import { Profile } from 'src/entities/profiles.entity';
import { Task } from '../entities/tasks.entity'; // 追加
import { TaskComment } from 'src/entities/task_comments.entity';
import { TaskItem } from 'src/entities/task_items.entity';
import { Disputation } from '../entities/disputations.entity'; // 追加


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
  controllers: [AppController, UserController, ProfileController, TaskController, TaskCommentController, TaskItemController, DisputationController ],
  providers: [AppService, UserService, ProfileService, TaskService, TaskCommentService, TaskItemService, DisputationService],
})
export class AppModule {}