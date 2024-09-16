import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskComment } from '../entities/task_comments.entity'; // 追加
import { TaskCommentController } from '../controllers/task_comment.controller'; // 追加
import { TaskCommentService } from '../services/task_comment.service'; // 追加

@Module({
  imports: [TypeOrmModule.forFeature([TaskComment])], // TaskCommentエンティティをインポート
  controllers: [TaskCommentController], // コントローラーを登録
  providers: [TaskCommentService], // サービスを登録
  exports: [TaskCommentService], // サービスをエクスポート
})
export class TaskCommentModule {}