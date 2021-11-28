// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app from '../../app';

describe('User Route', () => {
  it('should return 400 when create user without mandatory data (username) is not sent', async () => {
    const res = await request(app).post('/v1/user').send();
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });

  it('should return 400 when update user without mandatory data (username) is not sent', async () => {
    const res = await request(app)
      .put('/v1/user/391f9306-4f8a-11ec-81d3-0242ac130003')
      .send();
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });

  it('should return 400 when get user with param diferent of UUID', async () => {
    const res = await request(app).get('/v1/user/falseuuid').send();
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });

  it('should return 400 when update user with param diferent of UUID', async () => {
    const res = await request(app).put('/v1/user/falseuuid').send({
      username: 'testeusername',
    });
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });

  it('should return 400 when delete user with param diferent of UUID', async () => {
    const res = await request(app).delete('/v1/user/falseuuid').send({
      username: 'testeusername',
    });
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });

  it('should return 400 when try to create user with primaryphone in wrong format', async () => {
    const res = await request(app).post('/v1/user/').send({
      username: 'testeusername',
      primaryPhone: 'wrongphone',
    });
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });

  it('should return 400 when update user without mandatory data (username) is not sent', async () => {
    const res = await request(app)
      .put('/v1/user/391f9306-4f8a-11ec-81d3-0242ac130003')
      .send({
        username: 'testeusername',
        primaryPhone: 'wrongphone',
      });
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });
});
