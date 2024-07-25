/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";

import { authUserController } from "../dependencies";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  await authUserController.login(req, res);
});
export { authRouter };
