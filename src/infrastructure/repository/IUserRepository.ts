import User from '../../entity/User';

interface IUserRepository {
  createUser(user: User): Promise<boolean>;
  getUserByUserName(user: User): Promise<User | boolean>;
  getUserById(user: User): Promise<User | boolean>;
  verifyById(id: string): Promise<boolean>;
  updateUser(id: string, user: User): Promise<boolean>;
  deleteUser(id: string): Promise<boolean>;
}

export default IUserRepository;
