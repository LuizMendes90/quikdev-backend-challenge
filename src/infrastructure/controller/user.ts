import { Router, Request, Response } from 'express';

const user = Router();

user.post('/', async (req: Request, res: Response) => {
  return res.sendStatus(201);
});
