// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app from '../../app';

describe('Register Route', () => {
  it('should return 400 when register user without mandatory data (username) is not sent', async () => {
    const res = await request(app)
      .post('/v1/user')
      .send({ password: 'testpassword' });
    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });
  it('should return 400 when register user without mandatory data (password) is not sent', async () => {
    const res = await request(app)
      .post('/v1/user')
      .send({ username: 'testusername' });

    const { statusCode } = res;

    expect(statusCode).toBe(400);
  });
});
