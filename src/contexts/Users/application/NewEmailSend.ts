import { Logger } from "@/shared/logger/logger";

import { UserRepository } from "../domain/user.repository";

export class newEmailSend {
  constructor(
    private readonly logger: Logger,
    private readonly userRepository: UserRepository,
  ) {}

  async sendEmail(email: string): Promise<void> {}
}
