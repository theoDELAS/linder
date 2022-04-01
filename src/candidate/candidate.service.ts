import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { Candidate } from './entities/candidate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepository: Repository<Candidate>,
  ) {}

  create(createCandidateDto: CreateCandidateDto) {
    const candidate = {
      profilePicUrl: createCandidateDto.profilePicUrl,
      firstName: createCandidateDto.firstName,
      lastName: createCandidateDto.lastName,
      email: createCandidateDto.email,
      description: createCandidateDto.description,
      tags: createCandidateDto.tags,
      netSalaryRequested: createCandidateDto.netSalaryRequested,
      wantedOffer: createCandidateDto.wantedOffer,
    };
    this.candidateRepository.save(candidate);
    return candidate;
  }

  findAll(): Promise<Candidate[]> {
    return this.candidateRepository.find();
  }

  findOne(id: number): Promise<Candidate> {
    return this.candidateRepository.findOne(id);
  }

  update(id: number, updateCandidateDto: UpdateCandidateDto) {
    return `This action updates a #${id} candidate`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidate`;
  }
}
