import { IRate, Rate } from "../domain/Rate";
import { RateRepository } from "../domain/Rate.repository";

export class CreateRate {
  constructor(private readonly rateRepository: RateRepository) {}

  async createRate(
    purchasePrice: number,
    salePrice: number,
    purchasePriceComparative: number,
    salePriceComparative: number,
    purchasePriceParalelo: number,
    salePriceParalelo: number,
    status: boolean,
  ): Promise<{ rate: IRate }> {
    const rate = Rate.create({
      purchasePrice,
      salePrice,
      purchasePriceComparative,
      salePriceComparative,
      purchasePriceParalelo,
      salePriceParalelo,
      status,
    });
    await this.rateRepository.create(rate);
    return { rate: rate.toPrimitive() };
  }
}
