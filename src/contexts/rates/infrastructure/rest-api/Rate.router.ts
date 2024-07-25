/* eslint-disable unicorn/no-array-method-this-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";

import { rateController } from "../dependencies";

const rateRouter = express.Router();

rateRouter.get("/", async (req, res) => {
  await rateController.find(req, res);
});
export { rateRouter };
