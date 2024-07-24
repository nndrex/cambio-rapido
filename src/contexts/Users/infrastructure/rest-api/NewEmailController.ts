import { newEmailSend } from "../../application/NewEmailSend";
export class NewEmailController {
  constructor(private readonly newEmailSend: newEmailSend) {}
}
