import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from '../services/profile.service';
import { ProfileRepository } from '../repositories/profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileRepository])],
  providers: [ProfileService],
  exports: [ProfileRepository],
})
export class ProfileModule {}

// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProfileService } from '../services/profile.service';
// import { ProfileRepository } from '../repositories/profile.repository';
// import { ProfileController } from '../controllers/profile.controller';

// @Module({
//   imports: [TypeOrmModule.forFeature([
//     ProfileRepository
//   ])],
//   controllers: [ProfileController],
//   providers: [ProfileService],
//   exports: [ProfileService],
// })
// export class ProfileModule {}