import { HttpCode, Injectable } from '@nestjs/common';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enterprise } from './entities/enterprise.entity';

@Injectable()
export class EnterpriseService {
  constructor(
    @InjectRepository(Enterprise)
    private enterprisesRepository: Repository<Enterprise>,
  ) {}

  async create(createEnterpriseDto: CreateEnterpriseDto) {
    const enterprise = {
      name: createEnterpriseDto.name,
      siren: createEnterpriseDto.siren,
      description: createEnterpriseDto.description,
      logoUrl: createEnterpriseDto.logoUrl,
    };

    this.enterprisesRepository.save(enterprise);

    return enterprise;
  }

  findAll(): Promise<Enterprise[]> {
    return this.enterprisesRepository.find();
  }

  findOne(id: any): Promise<Enterprise> {
    return this.enterprisesRepository.findOne(id);
  }

  findBy(sirenNumber: number): Promise<Enterprise[]> {
    return this.enterprisesRepository.find({ where: { siren: sirenNumber } });
  }

  update(id: string, updateEnterpriseDto: UpdateEnterpriseDto) {
    return `This action updates a #${id} enterprise`;
  }

  remove(id: string) {
    return `This action removes a #${id} enterprise`;
  }
}
