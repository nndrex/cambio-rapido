import { ConsoleLogger } from "@/src/contexts/shared/logger/console-logger";

import { IRate, Rate } from "../../domain/Rate";
import * as RateModel from "../../domain/Rate.model";
import { RateRepository } from "../../domain/Rate.repository";

export class MongoRateRepository implements RateRepository {
  constructor(private readonly logger: ConsoleLogger) {}
  async find(): Promise<Rate> {
    const rateFinded = (await RateModel.Rate.findOne({
      status: true,
    })) as IRate;
    return new Rate(rateFinded);
  }
}
