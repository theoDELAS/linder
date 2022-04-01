import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './enterprise/entities/enterprise.entity';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { PingController } from './ping/ping.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'linder',
      entities: [Enterprise],
      synchronize: true,
    }),
    EnterpriseModule,
  ],
  controllers: [PingController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
