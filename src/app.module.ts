import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './enterprise/entities/enterprise.entity';
import { EnterpriseController } from './enterprise/enterprise.controller';
import { EnterpriseService } from './enterprise/enterprise.service';
import { EnterpriseModule } from './enterprise/enterprise.module';

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
  controllers: [AppController, EnterpriseController],
  providers: [AppService, EnterpriseService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
