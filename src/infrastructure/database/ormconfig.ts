import { ConnectionOptions } from 'typeorm';

const info: ConnectionOptions = {
  type: 'mongodb',
  host: 'quikuserdb',
  username: 'quikuser',
  password: 'quikuserPWD',
  port: 27017,
  database: 'quikuser',
  authSource: 'admin',
  synchronize: true,
  logging: false,
  entities: ['src/schemas/**/*.ts'],
};

export default info;
