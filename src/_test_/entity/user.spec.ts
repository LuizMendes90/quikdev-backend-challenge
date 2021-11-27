import User from '../../entity/User';
import IUserRepository from '../../infrastructure/repository/IUserRepository';

class MockRepo implements IUserRepository {
  async createUser(user: User): Promise<boolean> {
    return true;
  }

  async getUserByUserName(user: User): Promise<boolean | User> {
    return true;
  }

  async getUserById(user: User): Promise<boolean | User> {
    return true;
  }

  async verifyById(id: string): Promise<boolean> {
    return true;
  }

  async updateUser(id: string, user: User): Promise<boolean> {
    return true;
  }

  async deleteUser(id: string): Promise<boolean> {
    return true;
  }
}

describe('User', () => {
  it('should return true if user already exists', async () => {
    const mock = new MockRepo();
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.exist();
    expect(exists).toBe(true);
  });

  it('should return false to create if user already exists', async () => {
    const mock = new MockRepo();
    const user = new User(mock);
    user.id = 'ad163ac6-4fa8-11ec-81d3-0242ac130003';

    const exists = await user.create();
    expect(exists).toBe(false);
  });
});
