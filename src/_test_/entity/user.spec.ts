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

  it('should return true to update if user already exists', async () => {
    const mock = new MockTrueRepo();
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.update(user.id);
    expect(exists).toBe(true);
  });

  it('should return true to delete if user already exists', async () => {
    const mock = new MockTrueRepo();
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.delete(user.id);
    expect(exists).toBe(true);
  });

  it('should return true to verify if id user already exists', async () => {
    const mock = new MockTrueRepo();
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.verifyExistById(user.id);
    expect(exists).toBe(true);
  });
});
