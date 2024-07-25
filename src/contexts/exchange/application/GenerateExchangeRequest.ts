import { Exchange, IExchange } from "../domain/Exchange";
import { ExchangeRepository } from "../domain/Exchange.repository";
import { Rate } from "../domain/Rate";

export class GenerateExchangeRequest {
  constructor(private readonly exchangeRepository: ExchangeRepository) {}

  async generateExchangeRequest(
    tipoDeCambio: string,
    tasaDeCambio: Rate,
    montoEnviar: number,
    idUsuario: string,
  ): Promise<{ exchange: IExchange }> {
    const exchange = Exchange.create({
      tipoDeCambio,
      tasaDeCambio,
      montoEnviar,
      idUsuario,
    });
    await this.exchangeRepository.create(exchange);
    return { exchange: exchange.toPrimitive() };
  }
}
