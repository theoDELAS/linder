import { Connection } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './enterprise/entities/enterprise.entity';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { PingController } from './ping/ping.controller';
import { Candidate } from './candidate/entities/candidate.entity';
import { Tag } from './candidate/entities/tag.entity';
import { CandidateModule } from './candidate/candidate.module';
import { CandidateController } from './candidate/candidate.controller';
import { CandidateService } from './candidate/candidate.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'notitou',
      password: 'new',
      database: 'linder',
      entities: [Enterprise, Candidate, Tag],
      synchronize: true,
    }),
    EnterpriseModule,
    CandidateModule,
  ],
  controllers: [PingController, CandidateController],
  providers: [CandidateService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
