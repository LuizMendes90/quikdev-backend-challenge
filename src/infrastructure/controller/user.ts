import { Router, Request, Response } from 'express';
import validator from 'validator';
import User from '../../entity/User';
import addUser from '../../usecases/addUser';
import deleteUser from '../../usecases/deleteUser';
import dtoUser from '../../usecases/dtoUser';
import getUserById from '../../usecases/getUserById';
import updateUser from '../../usecases/updateUser';
import UserRepository from '../repository/UserRepository';

const userRoute = Router();

userRoute.post('/', async (req: Request, res: Response) => {
  const dto: dtoUser = {
    name: req.body.name,
    username: req.body.username,
    birthdate: req.body.birthdate,
    address: req.body.address,
    addressNumber: req.body.addressNumber,
    primaryPhone: req.body.primaryPhone,
    description: req.body.description,
  };

  if (!dto.username) {
    return res.status(400).send({ msg: 'User name is required!' });
  }

  const repository = new UserRepository();
  const user = new User(repository);

  const response = await addUser(user, dto);

  if (response) return res.sendStatus(201);
  return res
    .status(409)
    .send({ msg: 'User already exists, try another username.' });
});

userRoute.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!validator.isUUID(id)) {
    return res.status(400).send({ msg: 'Id must be a UUID' });
  }

  const repository = new UserRepository();
  const user = new User(repository);

  const response = await getUserById(user, id);
  if (response) return res.status(200).send(response);
  return res.sendStatus(204);
});

userRoute.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!validator.isUUID(id)) {
    return res.status(400).send({ msg: 'Id must be a UUID' });
  }

  const dto: dtoUser = {
    name: req.body.name,
    username: req.body.username,
    birthdate: req.body.birthdate,
    address: req.body.address,
    addressNumber: req.body.addressNumber,
    primaryPhone: req.body.primaryPhone,
    description: req.body.description,
  };

  if (!dto.username) {
    return res
      .status(400)
      .send({ msg: 'User already exists, try another username.' });
  }

  const repository = new UserRepository();
  const user = new User(repository);

  const response = await updateUser(user, dto, id);

  if (response) return res.status(200).send(response);
  return res.sendStatus(204);
});

userRoute.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!validator.isUUID(id)) {
    return res.status(400).send({ msg: 'Id must be a UUID' });
  }
  const repository = new UserRepository();
  const user = new User(repository);

  const response = await deleteUser(user, id);

  if (response) return res.status(200).send(response);
  return res.sendStatus(204);
});

export default userRoute;
