import type { Config } from './types';
const config: Config = {
  port: +process.env.PORT || 8080,
  host: process.env.HOST || "0.0.0.0",
  db: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT || 5433,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

export default config;
