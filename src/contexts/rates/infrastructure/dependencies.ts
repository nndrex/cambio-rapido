import { ConsoleLogger } from "@/src/contexts/shared/logger/console-logger";

import { ListRate } from "../application/ListRate";
import { MongoRateRepository } from "./rate-repository/MongoRate.repository";
import { RateController } from "./rest-api/Rate.controller";

const logger = new ConsoleLogger();
const rateRepository = new MongoRateRepository(logger);
const listRate = new ListRate(rateRepository);

export const rateController = new RateController(listRate);
