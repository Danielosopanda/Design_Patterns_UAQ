export type Config = {
  port: number;
  host: string;
  db: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
};
