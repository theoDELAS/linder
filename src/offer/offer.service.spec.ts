import { Test, TestingModule } from '@nestjs/testing';
import { CreateOfferDto } from './dto/create-offer.dto';
import { OfferService } from './offer.service';

describe('OfferService', () => {
  let service: OfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferService],
    }).compile();

    service = module.get<OfferService>(OfferService);
  });

  it('Create Offer OK ! Should return CreateOfferDto object', () => {
    expect(
      service.create({
        description: 'test',
        keyWord: ['1', '2'],
        salary: 1000,
        type: 'CDI',
        status: 'Open',
        isForRecruter: true,
      } as CreateOfferDto),
    ).toEqual({
      description: 'test',
      keyWord: ['1', '2'],
      salary: 1000,
      type: 'CDI',
      status: 'Open',
      isForRecruter: true,
    } as CreateOfferDto);
  });

  it('Create Offer KO with big description! Should return error', () => {
    expect(
      service.create({
        description: `TROP LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG !`,
        keyWord: ['BEAUCOUP', 'TROP', 'LOOONG'],
        salary: 1,
        type: 'CDprestation',
        status: 'Pourvue',
        isForRecruter: false,
      } as CreateOfferDto),
    ).toEqual('The description must be less than 280 characters');
  });
});
