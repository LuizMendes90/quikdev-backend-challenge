import { Router, Request, Response } from 'express';
import addUser from '../../usecases/addUser';
import dtoUser from '../../usecases/dtoUser';
import getUserById from '../../usecases/getUserById';
import updateUser from '../../usecases/updateUser';

const userRoute = Router();

userRoute.post('/', async (req: Request, res: Response) => {
  const user: dtoUser = {
    name: req.body.name,
    username: req.body.username,
    birthdate: req.body.birthdate,
    address: req.body.address,
    addressNumber: req.body.addressNumber,
    primaryPhone: req.body.primaryPhone,
    description: req.body.description,
  };

  const response = await addUser(user);

  if (response) return res.sendStatus(201);
  return res.sendStatus(409);
});

userRoute.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await getUserById(id);
  if (response) return res.status(200).send(response);
  return res.sendStatus(204);
});

userRoute.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: dtoUser = {
    name: req.body.name,
    username: req.body.username,
    birthdate: req.body.birthdate,
    address: req.body.address,
    addressNumber: req.body.addressNumber,
    primaryPhone: req.body.primaryPhone,
    description: req.body.description,
  };

  const response = await updateUser(id, user);

  if (response) return res.status(200).send(response);
  return res.sendStatus(204);
});

export default userRoute;
