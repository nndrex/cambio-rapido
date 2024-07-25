/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Request, Response } from "express";

import { AuthUser } from "../../application/AuthUser";

export class AuthUserController {
  constructor(private readonly authUserApplication: AuthUser) {}
  async login(req: Request, res: Response) {
    const token = await this.authUserApplication.login(
      req.body.email,
      req.body.password,
    );
    res.status(201).send({ token: token });
  }
}
