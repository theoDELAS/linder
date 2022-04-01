import { INestApplication } from '@nestjs/common';
import { startApp } from './test.utils';
import * as request from 'supertest';
import { CreateEnterpriseDto } from '../src/enterprise/dto/create-enterprise.dto';

const exempleEnterprise = {
  name: 'Name',
  siren: 998877665,
  description: 'dexcription',
  logoUrl: 'urllogo',
} as CreateEnterpriseDto;

describe('/enterprise endpoint', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await startApp();
  });

  describe('[POST] when creating a enterprise', () => {
    it('should return the correct id', async () => {
      const { body } = await request(app.getHttpServer())
        .post('/api/enterprise')
        .send()
        .expect(201);

      expect(body.id).not.toBeUndefined();
    });

    it('should have stored the enterprise', async () => {
      const { body } = await request(app.getHttpServer())
        .post('/api/enterprise')
        .send(exempleEnterprise)
        .expect(201);

      const get = await request(app.getHttpServer())
        .get(`/api/enterprise/${body.id}`)
        .expect(200);

      expect(get.body.name).toEqual(exempleEnterprise.name);
    });
  });
});
