/* eslint-disable unicorn/no-array-method-this-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";

import { exchangeController } from "../dependencies";

const exchangeRouter = express.Router();

exchangeRouter.get("/", async (req, res) => {
  await exchangeController.list(req, res);
});
exchangeRouter.post("/", async (req, res) => {
  await exchangeController.generate(req, res);
});

exchangeRouter.get("/:id", async (req, res) => {
  await exchangeController.detail(req, res);
});

exchangeRouter.delete("/:id", async (req, res) => {
  await exchangeController.delete(req, res);
});
export { exchangeRouter };
