import { Rate } from "../domain/Rate";
import { RateRepository } from "../domain/Rate.repository";

export class ListRate {
  constructor(private readonly rateRepository: RateRepository) {}

  async find(): Promise<Rate> {
    const rates = await this.rateRepository.find();
    return rates;
  }
}
