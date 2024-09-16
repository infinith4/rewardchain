import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { DisputationService } from '../services/disputation.service'; // 追加
import { Disputation } from "../entities/disputations.entity"; // 追加
import { DisputationDto } from "../dtos/disputations.dto"; // 追加

@Controller('/api/disputations')
export class DisputationController {
  constructor(private readonly disputationService: DisputationService) {}

  @Get()
  getRoot(): {} {
    return this.disputationService.getDisputation();
  }

  @Get()
  async findAll(): Promise<Disputation[]> {
    return this.disputationService.findAll();
  }

  @Get(':id')
  async getDisputation(@Param('id') id: number): Promise<Disputation> {
    return this.disputationService.findOne(id);
  }

  @Post('create')
  async createDisputation(@Body() createDisputationDto: DisputationDto): Promise<Disputation> {
    return this.disputationService.create(createDisputationDto);
  }

  @Put(":id")
  async updateDisputation(
    @Param("id") id: number,
    @Body() updateDisputationDto: DisputationDto,
  ): Promise<Disputation | null> {
    return this.disputationService.update(id, updateDisputationDto);
  }
  
  @Delete(':id')
  async deleteDisputation(@Param('id') id: number): Promise<void> {
    return this.disputationService.delete(id);
  }
}
