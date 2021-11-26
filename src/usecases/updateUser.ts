import User from '../entity/User';
import dtoUser from './dtoUser';

const updateUser = async (
  user: User,
  request: dtoUser,
  id: string,
): Promise<boolean> => {
  user.name = request.name;
  user.username = request.username;
  user.birthdate = request.birthdate;
  user.address = request.address;
  user.addressNumber = request.addressNumber;
  user.primaryPhone = request.primaryPhone;
  user.description = request.description;

  const result = await user.update(id);
  return result;
};

export default updateUser;
