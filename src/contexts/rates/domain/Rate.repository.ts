import { Rate } from "./Rate";

export interface RateRepository {
  find(): Promise<Rate>;
  create(rate: Rate): Promise<void>;
  findById(id: string): Promise<Rate>;
  update(id: string, rate: Rate): Promise<void>;
  delete(id: string): Promise<void>;
}
