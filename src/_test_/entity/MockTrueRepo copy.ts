import User from '../../entity/User';
import IUserRepository from '../../infrastructure/repository/IUserRepository';

class MockTrueRepo implements IUserRepository {
  async getUserWithPassword(): Promise<boolean | User> {
    return true;
  }

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

export default MockTrueRepo;
