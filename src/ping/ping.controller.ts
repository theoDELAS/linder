import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('ping')
@ApiTags('ping')
export class PingController {
  @Get()
  public ping(): string {
    return 'Pong';
  }
}
