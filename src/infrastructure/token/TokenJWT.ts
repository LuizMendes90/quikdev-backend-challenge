import jwt from 'jsonwebtoken';
import User from '../../entity/User';
import dtoToken from './dtoToken';

class TokenJWT {
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
