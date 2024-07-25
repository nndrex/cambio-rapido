import { Exchange } from "../domain/Exchange";
import { ExchangeRepository } from "../domain/Exchange.repository";

export class ListExchangeRequests {
  constructor(private readonly exchangeRepository: ExchangeRepository) {}

  async listExchangeRequests(): Promise<Exchange[]> {
    const exchanges = await this.exchangeRepository.find();
    return exchanges;
  }
}
