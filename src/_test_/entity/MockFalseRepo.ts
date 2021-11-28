import User from '../../entity/User';
import IUserRepository from '../../infrastructure/repository/IUserRepository';

class MockFalseRepo implements IUserRepository {
  async getUserWithPassword(): Promise<boolean | User> {
    return true;
  }

  async createUser(user: User): Promise<boolean> {
    return true;
  }

  async getUserByUserName(user: User): Promise<boolean | User> {
    return false;
  }

  async getUserById(user: User): Promise<boolean | User> {
    return false;
  }

  async verifyById(id: string): Promise<boolean> {
    return false;
  }

  async updateUser(id: string, user: User): Promise<boolean> {
    return false;
  }

  async deleteUser(id: string): Promise<boolean> {
    return false;
  }
}

export default MockFalseRepo;
