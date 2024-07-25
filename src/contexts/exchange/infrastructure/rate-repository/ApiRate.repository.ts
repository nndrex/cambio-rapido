/* eslint-disable @typescript-eslint/no-unsafe-call */
import fetch from "node-fetch";

import { IRate, Rate } from "../../domain/Rate";
import { RateRepository } from "../../domain/Rate.repository";

export class ApiRateRepository implements RateRepository {
  async find(): Promise<Rate> {
    const apiRateUrl = process.env.API_RATE_URL as string;
    const response = await fetch(apiRateUrl);
    console.log("response de el api de rate");
    const data = (await response.json()) as IRate;
    console.log(data);
    return new Rate(data);
  }
}
