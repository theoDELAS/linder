import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Controller('enterprise')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('/offer')
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.offerService.create(createOfferDto);
  }

  @Get('/offer')
  findAll() {
    return this.offerService.findAll();
  }

  @Get('/offer/:id')
  findOne(@Param('id') id: string) {
    return this.offerService.findOne(+id);
  }

  @Patch('/offer/:id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offerService.update(+id, updateOfferDto);
  }

  @Delete('/offer/:id')
  remove(@Param('id') id: string) {
    return this.offerService.remove(+id);
  }
}
