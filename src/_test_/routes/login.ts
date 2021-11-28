// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app from '../../app';

describe('Login Route', () => {
  it('should return 400 when Login user without mandatory data (username) is not sent', async () => {
    const res = await request(app)
      .post('/v1/login')
      .send({ password: 'testpassword' });
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });

  it('should return 400 when Login user without mandatory data (password) is not sent', async () => {
    const res = await request(app)
      .post('/v1/login')
      .send({ password: 'testpassword' });
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });
});
