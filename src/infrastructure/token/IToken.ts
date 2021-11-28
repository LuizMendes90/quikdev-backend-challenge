import User from '../../entity/User';
import dtoToken from './dtoToken';

interface IToken {
  generate(user: User): dtoToken;
}

export default IToken;
