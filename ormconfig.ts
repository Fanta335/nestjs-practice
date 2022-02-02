import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
