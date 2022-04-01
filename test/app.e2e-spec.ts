import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getConnection } from 'typeorm';
import { CreateEnterpriseDto } from '../src/enterprise/dto/create-enterprise.dto';
import { generateRandomNumber, startApp } from './test.utils';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await startApp();
    const entities = getConnection().entityMetadatas;

    for (const entity of entities) {
      const repository = getConnection().getRepository(entity.name);
      await repository.clear();
    }
  });

  describe('[POST] when creating a enterprise', () => {
    const exempleEnterprise = {
      name: 'Name',
      siren: generateRandomNumber(999999999),
      description: 'dexcription',
      logoUrl: 'urllogo',
    } as CreateEnterpriseDto;

    it('should return the correct', async () => {
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
