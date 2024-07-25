import { Exchange } from "../domain/Exchange";
import { ExchangeRepository } from "../domain/Exchange.repository";

export class DetailExchangeRequest {
  constructor(private readonly exchangeRepository: ExchangeRepository) {}

  async detailExchangeRequest(id: string): Promise<Exchange> {
    const exchange = await this.exchangeRepository.findById(id);
    return exchange;
  }
}
