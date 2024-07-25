import { Rate } from "../domain/Rate";
import { RateRepository } from "../domain/Rate.repository";

export class GetRate {
  constructor(private readonly rateRepository: RateRepository) {}

  async getRate(): Promise<Rate> {
    const rate = await this.rateRepository.find();
    return rate;
  }
}
