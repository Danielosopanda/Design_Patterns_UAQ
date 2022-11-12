import express from 'express';
import { Client } from "pg";
import { UserController } from './controllers/UserController';

require("dotenv").config({
  path: ".env.local",
});

const app = express();
const port = process.env.PORT;

const userController = new UserController();

app.get("/", userController.getMoment.bind(userController));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
