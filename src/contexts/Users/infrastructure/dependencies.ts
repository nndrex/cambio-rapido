import { ConsoleLogger } from "@/src/contexts/shared/logger/console-logger";

import { SaveUser } from "../application/SaveUser";
import { SaveUserController } from "./rest-api/SaveUserController";
import { MongoUserRepository } from "./user-repository/MongoUser.repository";

const logger = new ConsoleLogger();
const userRepository = new MongoUserRepository(logger);
const saveUser = new SaveUser(userRepository);

export const saveUserController = new SaveUserController(saveUser);
