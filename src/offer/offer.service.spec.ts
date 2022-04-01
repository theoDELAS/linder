import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseService } from 'src/enterprise/enterprise.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { OfferService } from './offer.service';

describe('OfferService', () => {
  let offerService: OfferService;
  let enterpriseService: EnterpriseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferService],
    }).compile();

    offerService = module.get<OfferService>(OfferService);
  });

  it('Create Offer OK ! Should return CreateOfferDto object', () => {
    expect(
      offerService.create({
        description: 'test',
        keyWord: ['1', '2'],
        salary: 1000,
        type: 'CDI',
        status: 'Open',
        enterprise: 1,
        isForRecruter: true,
      } as CreateOfferDto),
    ).toEqual({
      description: 'test',
      keyWord: ['1', '2'],
      salary: 1000,
      type: 'CDI',
      enterprise: 1,
      status: 'Open',
      isForRecruter: true,
    } as CreateOfferDto);
  });

  it('Create Offer KO with big description! Should return error', () => {
    expect(
      offerService.create({
        description: `TROP LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG !`,
        keyWord: ['BEAUCOUP', 'TROP', 'LOOONG'],
        salary: 1,
        type: 'CDprestation',
        status: 'Pourvue',
        enterprise: 1,
        isForRecruter: false,
      } as CreateOfferDto),
    ).toEqual('The description must be less than 280 characters');
  });
});
