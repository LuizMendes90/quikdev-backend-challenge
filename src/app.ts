import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './api-docs/swagger.json';
import userRoute from './infrastructure/controller/user';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/v1/user', userRoute);
app.use(express.json());

export default app;
