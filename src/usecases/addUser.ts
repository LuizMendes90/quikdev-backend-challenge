import User from '../entity/User';
import dtoUser from './dtoUser';

const addUser = async (request: dtoUser): Promise<boolean> => {
  const user: User = new User();

  user.name = request.name;
  user.username = request.username;
  user.birthdate = request.birthdate;
  user.address = request.address;
  user.addressNumber = request.addressNumber;
  user.primaryPhone = request.primaryPhone;
  user.description = request.description;
  user.createdAt = new Date();

  const result = await user.create();

  return result;
};

export default addUser;
