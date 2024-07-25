/* eslint-disable unicorn/no-null */
import { ConsoleLogger } from "@/src/contexts/shared/logger/console-logger";

import { IUser, User } from "../../domain/user";
import * as UserModel from "../../domain/user.model";
import { UserRepository } from "../../domain/user.repository";

export class MongoUserRepository implements UserRepository {
  constructor(private readonly logger: ConsoleLogger) {}
  async findUserByEmail(email: string): Promise<User | null> {
    const userFinded = (await UserModel.User.findOne({ email })) as IUser;
    return new User(userFinded);
  }
  async createUser(user: User): Promise<void> {
    const primitiveUser = user.toPrimitive();
    const newUser = new UserModel.User({
      id: primitiveUser.id,
      name: primitiveUser.name,
      email: primitiveUser.email,
      password: primitiveUser.password,
      role: primitiveUser.role,
    });
    try {
      await newUser.save();
    } catch (error) {
      this.logger.info("Error saving user", error);
      throw new Error("Error saving user");
    }
  }
}
