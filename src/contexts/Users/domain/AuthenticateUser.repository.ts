export interface AuthenticateUserRepository {
  login(email: string, password: string): Promise<string>;
}
