/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Request, Response } from "express";

import { SaveUser } from "../../application/SaveUser";

export class SaveUserController {
  constructor(private readonly saveUserApplication: SaveUser) {}
  async saveUser(req: Request, res: Response) {
    await this.saveUserApplication.saveUser(
      req.body.name,
      req.body.email,
      req.body.password,
    );
    res.status(201).send();
  }
}
