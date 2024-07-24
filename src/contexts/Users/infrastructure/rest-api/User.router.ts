/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";

import { saveUserController } from "../dependencies";

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  await saveUserController.saveUser(req, res);
});
export { userRouter };
