import { DataSource } from "typeorm";
import Model from "../entities/model.entity";
import { Customer } from "../entities/customer.entity";

export const AppDataSource = new DataSource({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
  type: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Model, Customer],
  migrations: ['src/migrations/**/*{.ts,.js}'],
});
