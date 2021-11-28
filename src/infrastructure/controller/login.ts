import { Router, Request, Response } from 'express';
import User from '../../entity/User';
import dtoRegister from '../../usecases/dtoRegister';
import login from '../../usecases/login';
import UserRepository from '../repository/UserRepository';

const loginRoute = Router();

loginRoute.post('/', async (req: Request, res: Response) => {
  const dto: dtoRegister = {
    username: req.body.username,
    password: req.body.password,
  };

  if (!dto.username)
    return res.status(400).send({ msg: 'User name is required!' });
  if (!dto.password)
    return res.status(400).send({ msg: 'Password is required!' });

  const repository = new UserRepository();
  const user = new User(repository);

  const response = await login(user, dto);

  if (response) return res.status(200).send({ token: response });
  return res.status(204).send({ msg: 'Login not found.' });
});

export default loginRoute;
