import jwt from 'jsonwebtoken';
import User from '../../entity/User';
import dtoToken from './dtoToken';
import IToken from './IToken';

class TokenJWT implements IToken {
  generate(user: User): dtoToken {
    const { id } = user;
    const token = jwt.sign({ id }, `${process.env.SECRET}`, {
      expiresIn: '1d',
    });

    const tokenParams: dtoToken = {
      id,
      token,
    };

    return tokenParams;
  }
}

export default TokenJWT;
