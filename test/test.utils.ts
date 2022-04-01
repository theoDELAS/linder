import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { EnterpriseModule } from '../src/enterprise/enterprise.module';

export const startApp = async (): Promise<INestApplication> => {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule, EnterpriseModule],
  }).compile();

  const app = moduleRef.createNestApplication();
  app.setGlobalPrefix('api');
  await app.init();
  return app;
};

export const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

export interface ApiResponse<T> {
  status: number;
  body: T;
}
