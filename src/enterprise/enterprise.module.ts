import { Module } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseController } from './enterprise.controller';
import { Enterprise } from './entities/enterprise.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Enterprise])],
  controllers: [EnterpriseController],
  providers: [EnterpriseService],
  exports: [TypeOrmModule],
})
export class EnterpriseModule {}
