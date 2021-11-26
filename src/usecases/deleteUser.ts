import User from '../entity/User';

const deleteUser = async (user: User, id: string): Promise<boolean> => {
  const result = await user.delete(id);
  return result;
};

export default deleteUser;
