/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { ConsoleLogger } from "@/src/contexts/shared/logger/console-logger";

import { Exchange, IExchange } from "../../domain/Exchange";
import * as ExchangeModel from "../../domain/Exchange.model";
import { ExchangeRepository } from "../../domain/Exchange.repository";

export class MongoExchangeRepository implements ExchangeRepository {
  constructor(private readonly logger: ConsoleLogger) {}
  async create(exchange: Exchange): Promise<void> {
    const primitiveExchange = exchange.toPrimitive();
    const newExchange = new ExchangeModel.Exchange({
      id: primitiveExchange.id,
      tipoDeCambio: primitiveExchange.tipoDeCambio,
      tasaDeCambio: primitiveExchange.tasaDeCambio,
      montoEnviar: primitiveExchange.montoEnviar,
      montoRecibir: primitiveExchange.montoRecibir,
      idUsuario: primitiveExchange.idUsuario,
    });
    try {
      await newExchange.save();
    } catch (error) {
      this.logger.info("Error saving exchange", error);
      throw new Error("Error saving exchange");
    }
  }
  async find(): Promise<Exchange[]> {
    const exchangesFinded =
      (await ExchangeModel.Exchange.find()) as IExchange[];
    return exchangesFinded.map(exchange => new Exchange(exchange));
  }
  async findById(id: string): Promise<Exchange> {
    const exchangeFinded = (await ExchangeModel.Exchange.findOne({
      id,
    })) as IExchange;
    return new Exchange(exchangeFinded);
  }
  async update(id: string, exchange: Exchange): Promise<void> {
    const primitiveExchange = exchange.toPrimitive();
    try {
      await ExchangeModel.Exchange.updateOne({ id }, primitiveExchange);
    } catch (error) {
      this.logger.info("Error updating exchange", error);
      throw new Error("Error updating exchange");
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await ExchangeModel.Exchange.deleteOne({ id });
    } catch (error) {
      this.logger.info("Error deleting exchange", error);
      throw new Error("Error deleting exchange");
    }
  }
}
