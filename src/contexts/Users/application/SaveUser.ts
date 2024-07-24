import { IUser, User } from "../domain/user";
import { UserRepository } from "../domain/user.repository";

export class SaveUser {
  constructor(private readonly userRepository: UserRepository) {}

  async saveUser(
    name: string,
    email: string,
    password: string,
  ): Promise<{ user: IUser }> {
    const user = User.create({ name, email, password });
    await this.userRepository.createUser(user);
    return { user: user.toPrimitive() };
  }
}
