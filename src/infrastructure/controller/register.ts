import { Router, Request, Response } from 'express';
import User from '../../entity/User';
import dtoRegister from '../../usecases/dtoRegister';
import registerUser from '../../usecases/registerUser';
import UserRepository from '../repository/UserRepository';

const registerRoute = Router();

registerRoute.post('/', async (req: Request, res: Response) => {
  const dto: dtoRegister = {
    username: req.body.username,
    password: req.body.password,
  };

  if (!dto.username)
    return res.status(400).send({ msg: 'User name is required!' });

  const repository = new UserRepository();
  const user = new User(repository);

  const response = await registerUser(user, dto);

  if (response) return res.sendStatus(201);
  return res
    .status(409)
    .send({ msg: 'User already exists, try another username.' });
});

export default registerRoute;
