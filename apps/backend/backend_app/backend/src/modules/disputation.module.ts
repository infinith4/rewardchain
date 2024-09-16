import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disputation } from '../entities/disputations.entity'; // 追加
import { DisputationController } from '../controllers/disputation.controller'; // 追加
import { DisputationService } from '../services/disputation.service'; // 追加

@Module({
  imports: [TypeOrmModule.forFeature([Disputation])], // Disputationエンティティをインポート
  controllers: [DisputationController], // コントローラーを登録
  providers: [DisputationService], // サービスを登録
  exports: [DisputationService], // サービスをエクスポート
})
export class DisputationModule {}