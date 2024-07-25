export interface IRate {
  _id: string;
  purchasePrice: number;
  salePrice: number;
}

export class Rate {
  constructor(private attributes: IRate) {}

  toPrimitive(): IRate {
    return this.attributes;
  }
}
