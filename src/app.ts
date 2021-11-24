import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './api-docs/swagger.json';

const app = express();

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

export default app;
