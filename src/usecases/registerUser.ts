import User from '../entity/User';
import BCrypt from '../utils/crypt/BCrypt';
import dtoRegister from './dtoRegister';

const registerUser = async (
  user: User,
  request: dtoRegister,
): Promise<boolean> => {
  const crypt = new BCrypt();

  user.username = request.username;
  user.password = await crypt.crypt(request.password);
  user.createdAt = new Date();

  const result = await user.create();

  return result;
};

export default registerUser;
