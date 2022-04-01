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

export const generateRandomNumber = () => {
  return Math.random() * (1000 - 1) + 1;
};

export interface ApiResponse<T> {
  status: number;
  body: T;
}
