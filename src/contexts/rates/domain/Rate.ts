import { v4 as uuidv4 } from "uuid";

export interface IRate {
  id: string;
  purchasePrice: number;
  salePrice: number;
  purchasePriceComparative: number;
  salePriceComparative: number;
  purchasePriceParalelo: number;
  salePriceParalelo: number;
  status: boolean;
}

export class Rate {
  constructor(private attributes: IRate) {}

  static create(createRate: {
    purchasePrice: number;
    salePrice: number;
    purchasePriceComparative: number;
    salePriceComparative: number;
    purchasePriceParalelo: number;
    salePriceParalelo: number;
    status: boolean;
  }): Rate {
    return new Rate({
      id: uuidv4(),
      purchasePrice: createRate.purchasePrice,
      salePrice: createRate.salePrice,
      purchasePriceComparative: createRate.purchasePriceComparative,
      salePriceComparative: createRate.salePriceComparative,
      purchasePriceParalelo: createRate.purchasePriceParalelo,
      salePriceParalelo: createRate.salePriceParalelo,
      status: createRate.status,
    });
  }

  toPrimitive(): IRate {
    return this.attributes;
  }
}
