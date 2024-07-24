import { ConsoleLogger } from "@/src/contexts/shared/logger/console-logger";

import { User } from "../../domain/user";
import * as UserModel from "../../domain/user.model";
import { UserRepository } from "../../domain/user.repository";

export class MongoUserRepository implements UserRepository {
  constructor(private readonly logger: ConsoleLogger) {}
  findUserByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented." + email);
  }
  async createUser(user: User): Promise<void> {
    const primitiveUser = user.toPrimitive();
    const newUser = new UserModel.User({
      id: primitiveUser.id,
      name: primitiveUser.name,
      email: primitiveUser.email,
      password: primitiveUser.password,
    });
    try {
      await newUser.save();
    } catch (error) {
      this.logger.info("Error saving user", error);
      throw new Error("Error saving user");
    }
  }
}
