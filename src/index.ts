import express from 'express';
import { Client } from "pg";

require("dotenv").config({
  path: ".env.local",
});

const app = express();
const port = process.env.PORT;

app.get("/", async (req, res) => {

  const client = new Client({
    user: "username",
    host: "database",
    database: "test",
    password: "password",
    port: 5433
  });
  await client.connect();
  const resDb = await client.query("SELECT NOW()");
  await client.end();
  console.log(resDb)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
