import { ConsoleLogger } from "@/src/contexts/shared/logger/console-logger";

import { DeleteExchangeRequest } from "../application/DeleteExchangeRequest";
import { DetailExchangeRequest } from "../application/DetailExchangeRequest";
import { GenerateExchangeRequest } from "../application/GenerateExchangeRequest";
import { GetRate } from "../application/GetRate";
import { ListExchangeRequests } from "../application/ListExchangeRequests";
import { MongoExchangeRepository } from "./exchange-repository/MongoExchange.repository";
import { ApiRateRepository } from "./rate-repository/ApiRate.repository";
import { ExchangeController } from "./rest-api/Exchange.controller";

const logger = new ConsoleLogger();
const apiRateRepository = new ApiRateRepository();
const exchangeRepository = new MongoExchangeRepository(logger);

const getRate = new GetRate(apiRateRepository);
const listExchangeRequests = new ListExchangeRequests(exchangeRepository);
const generateExchangeRequest = new GenerateExchangeRequest(exchangeRepository);
const detailExchangeRequest = new DetailExchangeRequest(exchangeRepository);
const deleteExchangeRequest = new DeleteExchangeRequest(exchangeRepository);

export const exchangeController = new ExchangeController(
  listExchangeRequests,
  generateExchangeRequest,
  detailExchangeRequest,
  deleteExchangeRequest,
  getRate,
);
