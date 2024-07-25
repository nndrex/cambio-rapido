import { Rate } from "./Rate";

export interface RateRepository {
  find(): Promise<Rate>;
}
