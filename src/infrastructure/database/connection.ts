import { createConnection } from 'typeorm';
import info from './ormconfig';

const connection = async (): Promise<void> =>
  createConnection(info).then(() => {
    console.log('connectado');
  });

export default connection;
