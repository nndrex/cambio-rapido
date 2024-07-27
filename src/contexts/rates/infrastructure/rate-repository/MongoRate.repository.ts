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
  async create(rate: Rate): Promise<void> {
    await RateModel.Rate.create(rate.toPrimitive());
    return;
  }
  async update(id: string, rate: Rate): Promise<void> {
    await RateModel.Rate.updateOne({ _id: id }, rate.toPrimitive());
    return;
  }
  async delete(id: string): Promise<void> {
    await RateModel.Rate.deleteOne({ _id: id });
    return;
  }
  async findById(id: string): Promise<Rate> {
    const rateFinded = (await RateModel.Rate.findOne({
      _id: id,
    })) as IRate;
    return new Rate(rateFinded);
  }
}
