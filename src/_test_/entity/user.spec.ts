import User from '../../entity/User';
import MockTrueRepo from './MockTrueRepo';

describe('User', () => {
  it('should return true if user already exists', async () => {
    const mock = new MockTrueRepo();
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.exist();
    expect(exists).toBe(true);
  });

  it('should return false to create if user already exists', async () => {
    const mock = new MockTrueRepo();
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.create();
    expect(exists).toBe(false);
  });
});
