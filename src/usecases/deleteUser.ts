import User from '../entity/User';

const deleteUser = async (id: string): Promise<boolean> => {
  const user: User = new User();

  const result = await user.delete(id);
  return result;
};

export default deleteUser;
