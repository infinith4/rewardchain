import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

import { User } from "../entities/users.entity";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "db",
      port: 3306,
      username: "root",
      password: "root",
      database: "rewardchaindb",
      entities: [User],
      synchronize: false,
      retryAttempts: 3,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}