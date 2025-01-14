import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import swaggerDocs from './api-docs/swagger.json';
import userRoute from './infrastructure/controller/user';
import registerUser from './infrastructure/controller/register';
import connectionDB from './infrastructure/database/connection';
import MiddlewareAuth from './infrastructure/Middleware/auth/MiddlewareAuth';
import loginRoute from './infrastructure/controller/login';

const app = express();

app.use(express.json());
app.use(cors());

connectionDB();

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/v1/user', MiddlewareAuth, userRoute);
app.use('/v1/login', loginRoute);
app.use('/v1/register', registerUser);
app.use(express.json());

export default app;
