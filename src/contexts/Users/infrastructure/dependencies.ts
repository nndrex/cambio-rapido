import { ConsoleLogger } from "@/src/contexts/shared/logger/console-logger";

import { AuthUser } from "../application/AuthUser";
import { FindUser } from "../application/FindUser";
import { SaveUser } from "../application/SaveUser";
import { AuthUserController } from "./rest-api/AuthUser.controller";
import { SaveUserController } from "./rest-api/SaveUserController";
import { MongoUserRepository } from "./user-repository/MongoUser.repository";

const logger = new ConsoleLogger();
const userRepository = new MongoUserRepository(logger);
const saveUser = new SaveUser(userRepository);
const findUser = new FindUser(userRepository);
const authUser = new AuthUser(findUser);

export const saveUserController = new SaveUserController(saveUser);
export const authUserController = new AuthUserController(authUser);
