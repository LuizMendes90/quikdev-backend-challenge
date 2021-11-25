import User from '../entity/User';
import dtoUser from './dtoUser';

const getUserById = async (id: string): Promise<dtoUser | boolean> => {
  const user = new User();

  const response = await user.getById(id);

  if (response) {
    const dto: dtoUser = {
      id: user.id,
      name: user.name,
      username: user.username,
      birthdate: user.birthdate,
      address: user.address,
      addressNumber: user.addressNumber,
      primaryPhone: user.primaryPhone,
      description: user.description,
    };
    return dto;
  }
  return false;
};

export default getUserById;
