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
});
