import { RateRepository } from "../domain/Rate.repository";

export class DeleteRate {
  constructor(private readonly rateRepository: RateRepository) {}

  async deleteRate(id: string): Promise<void> {
    await this.rateRepository.delete(id);
    return;
  }
}
