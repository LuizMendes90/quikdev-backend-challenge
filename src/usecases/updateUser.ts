import User from '../entity/User';
import dtoUser from './dtoUser';

const updateUser = async (id: string, request: dtoUser): Promise<boolean> => {
  const user: User = new User();

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
