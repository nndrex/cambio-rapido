/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Request, Response } from "express";

import { ListRate } from "../../application/ListRate";

export class RateController {
  constructor(private readonly rateApplication: ListRate) {}
  async find(req: Request, res: Response) {
    const rate = await this.rateApplication.find();
    res.status(200).send(rate.toPrimitive());
  }
}
