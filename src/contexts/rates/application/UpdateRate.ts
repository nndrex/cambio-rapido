import { Rate } from "../domain/Rate";
import { RateRepository } from "../domain/Rate.repository";

export class UpdateRate {
  constructor(private readonly rateRepository: RateRepository) {}

  async updateRate(
    id: string,
    purchasePrice: number,
    salePrice: number,
    purchasePriceComparative: number,
    salePriceComparative: number,
    purchasePriceParalelo: number,
    salePriceParalelo: number,
    status: boolean,
  ): Promise<void> {
    const rate = Rate.create({
      purchasePrice,
      salePrice,
      purchasePriceComparative,
      salePriceComparative,
      purchasePriceParalelo,
      salePriceParalelo,
      status,
    });
    await this.rateRepository.update(id, rate);
    return;
  }
}
