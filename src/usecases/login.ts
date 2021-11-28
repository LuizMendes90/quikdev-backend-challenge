import User from '../entity/User';
import Bcript from '../utils/crypt/BCrypt';
import dtoRegister from './dtoRegister';

const login = async (
  user: User,
  request: dtoRegister,
): Promise<string | boolean> => {
  const crypt = new Bcript();

  user.username = request.username;
  user.password = await crypt.crypt(request.password);

  const result = await user.login();

  return result;
};

export default login;
