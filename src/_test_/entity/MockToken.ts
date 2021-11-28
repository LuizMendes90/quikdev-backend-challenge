import User from '../../entity/User';
import dtoToken from '../../infrastructure/token/dtoToken';
import IToken from '../../infrastructure/token/IToken';

class MockToken implements IToken {
  generate(user: User): dtoToken {
    const tokenParams: dtoToken = {
      id: '1',
      token: 'token',
    };

    return tokenParams;
  }
}

export default MockToken;
