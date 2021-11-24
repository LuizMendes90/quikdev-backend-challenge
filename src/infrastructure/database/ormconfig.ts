import { ConnectionOptions } from 'typeorm';

const info: ConnectionOptions = {
  type: 'mysql',
  host: 'quikuserdb',
  port: 3306,
  username: 'root',
  password: 'quikuserpwd',
  database: 'quikuser',
  synchronize: true,
  logging: false,
  entities: ['src/schemas/**/*.ts'],
};

export default info;
