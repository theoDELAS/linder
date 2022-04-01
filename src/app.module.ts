import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './enterprise/entities/enterprise.entity';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { Offer } from './offer/entities/offer.entity';
import { OfferModule } from './offer/offer.module';
import { Connection } from 'typeorm';
import { OfferController } from './offer/offer.controller';
import { OfferService } from './offer/offer.service';
import { PingController } from './ping/ping.controller';
import { EnterpriseController } from './enterprise/enterprise.controller';
import { EnterpriseService } from './enterprise/enterprise.service';
import { CandidateService } from './candidate/candidate.service';
import { CandidateController } from './candidate/candidate.controller';
import { Candidate } from './candidate/entities/candidate.entity';
import { Tag } from './candidate/entities/tag.entity';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'linder',
      entities: [Enterprise, Offer, Candidate, Tag],
      synchronize: true,
    }),
    EnterpriseModule,
    OfferModule,
    CandidateModule,
  ],
  controllers: [
    AppController,
    EnterpriseController,
    OfferController,
    PingController,
    CandidateController,
  ],
  providers: [AppService, EnterpriseService, OfferService, CandidateService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
