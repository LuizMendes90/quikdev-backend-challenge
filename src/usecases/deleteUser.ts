import User from '../entity/User';
import UserRepository from '../infrastructure/repository/UserRepository';

const deleteUser = async (id: string): Promise<boolean> => {
  const repository = new UserRepository();

  const user: User = new User(repository);

  const result = await user.delete(id);
  return result;
};

export default deleteUser;
