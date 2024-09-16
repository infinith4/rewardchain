import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProfileDto } from '../dtos/profiles.dto';
import { Profile } from '../entities/profiles.entity'; // 追加

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>
  ) {}

  getProfile(id: string = ""): { msg: string } {
    return { msg: `profile${id}` };
  }

  async findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }
  
  async findOne(id: number): Promise<Profile | null> {
    return this.profileRepository.findOne({ where: { id } }) || null;
  }

  async create(profileDto: ProfileDto): Promise<Profile> {
    const profile = this.profileRepository.create(profileDto);
    return profile;
  }

  async update(id: number, profile: ProfileDto): Promise<Profile | null> {
    await this.profileRepository.update(id, profile);
    return this.profileRepository.findOne({ where: { id } }) || null;
  }

  async delete(id: number): Promise<void> {
    // ユーザーを削除
    await this.profileRepository.delete(id);
  }
}
