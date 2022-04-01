import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private OfferRepository: Repository<Offer>,
  ) {}
  create(createOfferDto: CreateOfferDto) {
    if (createOfferDto.description.length < 280) {
      const offer = {
        description: createOfferDto.description,
        keyWord: createOfferDto.keyWord,
        salary: createOfferDto.salary,
        type: createOfferDto.type,
        status: createOfferDto.status,
        isForRecruter: createOfferDto.isForRecruter,
      };
      this.OfferRepository.save(offer);
      return createOfferDto;
    } else {
      return 'The description must be less than 280 characters';
    }
  }

  findAll(): Promise<Offer[]> {
    return this.OfferRepository.find();
  }

  findOne(id: number): Promise<Offer> {
    return this.OfferRepository.findOne(id);
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: number) {
    return `This action removes a #${id} offer`;
  }
}
