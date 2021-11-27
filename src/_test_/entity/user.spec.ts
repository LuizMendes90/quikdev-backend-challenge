import User from '../../entity/User';
import MockFalseRepo from './MockFalseRepo';
import MockTrueRepo from './MockTrueRepo';

const mock = new MockTrueRepo();
const mockFalse = new MockFalseRepo();

describe('User', () => {
  it('should return true if user already exists', async () => {
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.exist();
    expect(exists).toBe(true);
  });

  it('should return false to create if user already exists', async () => {
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.create();
    expect(exists).toBe(false);
  });

  it('should return true to update if user already exists', async () => {
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.update(user.id);
    expect(exists).toBe(true);
  });

  it('should return true to delete if user already exists', async () => {
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.delete(user.id);
    expect(exists).toBe(true);
  });

  it('should return true to verify if id user already exists', async () => {
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.verifyExistById(user.id);
    expect(exists).toBe(true);
  });

  it('should return object User when have a user with this id', async () => {
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const result = await user.getById(user.id);

    const isUser = result instanceof User;

    expect(isUser).toBe(true);
  });

  it('should return false if user already exists', async () => {
    const user = new User(mockFalse);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.exist();
    expect(exists).toBe(false);
  });

  it('should return true to create if user does not exists', async () => {
    const user = new User(mockFalse);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.create();
    expect(exists).toBe(true);
  });

  it('should return false to update if user does not exists', async () => {
    const user = new User(mockFalse);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.update(user.id);
    expect(exists).toBe(false);
  });
});
