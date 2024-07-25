import { v4 as uuidv4 } from "uuid";

import { Rate } from "./Rate";

export interface IExchange {
  id: string;
  tipoDeCambio: string;
  tasaDeCambio: Rate;
  montoEnviar: number;
  montoRecibir: number;
  idUsuario: string;
}

export class Exchange {
  constructor(private attributes: IExchange) {}
  static create(createExchange: {
    tipoDeCambio: string;
    tasaDeCambio: Rate;
    montoEnviar: number;
    idUsuario: string;
  }): Exchange {
    return new Exchange({
      id: uuidv4(),
      tipoDeCambio: createExchange.tipoDeCambio,
      tasaDeCambio: createExchange.tasaDeCambio,
      montoEnviar: createExchange.montoEnviar,
      montoRecibir: this.calculateAmount(
        createExchange.tipoDeCambio,
        createExchange.tasaDeCambio,
        createExchange.montoEnviar,
      ),
      idUsuario: createExchange.idUsuario,
    });
  }
  toPrimitive(): IExchange {
    return this.attributes;
  }

  private static calculateAmount(
    changeType: string,
    exchangeRate: Rate,
    toSendAmount: number,
  ): number {
    let amount = 0;
    switch (changeType) {
      case "compra": {
        console.log(
          `compra data ${exchangeRate.toPrimitive().purchasePrice} , ${toSendAmount}`,
        );
        amount = toSendAmount * exchangeRate.toPrimitive().purchasePrice;
        console.log(amount);
        break;
      }
      case "venta": {
        amount = toSendAmount / exchangeRate.toPrimitive().salePrice;
        break;
      }
      default: {
        break;
      }
    }
    return amount;
  }
}
