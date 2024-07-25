import { ExchangeRepository } from "../domain/Exchange.repository";

export class DeleteExchangeRequest {
  constructor(private readonly exchangeRepository: ExchangeRepository) {}

  async deleteExchangeRequest(id: string): Promise<void> {
    await this.exchangeRepository.delete(id);
  }
}
