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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'linder',
      password: 'linder',
      database: 'linder',
      entities: [Enterprise, Offer],
      synchronize: true,
    }),
    EnterpriseModule,
    OfferModule,
  ],
  controllers: [
    AppController,
    EnterpriseController,
    OfferController,
    PingController,
  ],
  providers: [AppService, EnterpriseService, OfferService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
