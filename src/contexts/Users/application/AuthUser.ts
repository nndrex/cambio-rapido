/* eslint-disable unicorn/no-null */
import jwt from "jsonwebtoken";

import { FindUser } from "./FindUser";

export class AuthUser {
  constructor(private readonly findUser: FindUser) {}

  async login(email: string, password: string): Promise<string> {
    const userFinded = await this.findUser.findUserByEmail(email);
    const secret = process.env.SECRET as string;
    if (!userFinded) {
      throw new Error("User not found");
    }
    const user = userFinded.toPrimitive();
    if (user.password !== password) {
      throw new Error("password incorrect");
    }
    const token = jwt.sign({ user: user.email, role: user.role }, secret);
    return token;
  }
}
