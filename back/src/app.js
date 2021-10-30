import express from "express";
import cors from "cors";

import './database/index.js'

// import { producer } from './kafka/index.js'

import { router } from "./router.js";

var corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200
};

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   req.producer = producer;

//   return next();
// });

app.use("/v1", router);

export { app };