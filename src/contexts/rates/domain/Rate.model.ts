import { model, Schema } from "mongoose";

import { IRate } from "./Rate";

const rateSchema = new Schema<IRate>({
  id: { type: String, required: true },
  purchasePrice: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  purchasePriceComparative: { type: Number, required: true },
  salePriceComparative: { type: Number, required: true },
  purchasePriceParalelo: { type: Number, required: true },
  salePriceParalelo: { type: Number, required: true },
  status: { type: Boolean, required: true },
});

export const Rate = model<IRate>("Rate", rateSchema);
