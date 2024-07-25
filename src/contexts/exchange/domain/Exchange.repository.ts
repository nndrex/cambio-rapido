import { Exchange } from "./Exchange";

export interface ExchangeRepository {
  create(exchange: Exchange): Promise<void>;
  find(): Promise<Exchange[]>;
  findById(id: string): Promise<Exchange>;
  update(id: string, exchange: Exchange): Promise<void>;
  delete(id: string): Promise<void>;
}
