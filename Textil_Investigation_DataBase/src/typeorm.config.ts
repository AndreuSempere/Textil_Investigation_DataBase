import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from './users/users.entity';
import * as dotenv from 'dotenv';
import { TelaEntity } from './tela/tela.entity';

dotenv.config();

const config = {
  type: 'mysql',
  host: 'database',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [UserEntity, TelaEntity],
  migrations: ['./../../../migrations/*.ts'],
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
