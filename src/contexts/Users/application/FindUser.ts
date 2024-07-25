/* eslint-disable unicorn/no-null */
import { User } from "../domain/user";
import { UserRepository } from "../domain/user.repository";

export class FindUser {
  constructor(private readonly userRepository: UserRepository) {}

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findUserByEmail(email);
    return user;
  }
}
