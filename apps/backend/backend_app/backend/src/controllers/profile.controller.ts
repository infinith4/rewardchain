import { Controller, Get, Post, Delete, Put, Patch, Param, Body } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { Profile } from "../entities/profiles.entity";
import { ProfileDto } from "../dtos/profiles.dto";

@Controller('/api/profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getRoot(): {} {
    return this.profileService.getProfile();
  }

  @Get('all')
  async findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  async getProfile(@Param('id') id: number): Promise<Profile> {
    return this.profileService.findOne(id);
  }

  @Post('create')
  postSignup(@Body() createProfileDto: ProfileDto): Promise<Profile> {
    return this.profileService.create(createProfileDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateProfileDto: ProfileDto,
  ): Promise<Profile | null> {
    return this.profileService.update(id, updateProfileDto);
  }
  
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.profileService.delete(id);
  }
}
