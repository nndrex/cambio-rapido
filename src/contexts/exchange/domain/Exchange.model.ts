import { model, Schema } from "mongoose";

import { IExchange } from "./Exchange";

const exchangeSchema = new Schema<IExchange>({
  id: { type: String, required: true },
  tipoDeCambio: { type: String, required: true },
  tasaDeCambio: { type: Object, required: true },
  montoEnviar: { type: Number, required: true },
  montoRecibir: { type: Number, required: true },
  idUsuario: { type: String, required: true },
});

export const Exchange = model<IExchange>("Exchange", exchangeSchema);
