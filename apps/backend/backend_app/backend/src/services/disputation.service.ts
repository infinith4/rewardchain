import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DisputationDto } from '../dtos/disputations.dto'; // 追加
import { Disputation } from '../entities/disputations.entity'; // 追加

@Injectable()
export class DisputationService {
  constructor(
    @InjectRepository(Disputation)
    private readonly disputationRepository: Repository<Disputation>, // Disputationリポジトリを使用
  ) {}

  async findAll(): Promise<Disputation[]> {
    return this.disputationRepository.find();
  }

  async findOne(id: number): Promise<Disputation | null> {
    return this.disputationRepository.findOne({ where: { id } }) || null;
  }

  async create(disputationDto: DisputationDto): Promise<Disputation> {
    const disputation = this.disputationRepository.create(disputationDto);
    return this.disputationRepository.save(disputation);
  }

  async update(id: number, disputationDto: DisputationDto): Promise<Disputation | null> {
    await this.disputationRepository.update(id, disputationDto);
    return this.disputationRepository.findOne({ where: { id } }) || null;
  }

  async delete(id: number): Promise<void> {
    await this.disputationRepository.delete(id);
  }
  getDisputation(id: string = ""): { msg: string } {
    return { msg: `disputation${id}` };
  }
}
