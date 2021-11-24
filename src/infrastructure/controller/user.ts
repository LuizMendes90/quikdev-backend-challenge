import { Router, Request, Response } from 'express';
import addUser from '../../usecases/addUser';
import dtoUser from '../../usecases/dtoUser';

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

export default userRoute;
