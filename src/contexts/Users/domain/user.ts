import { v4 as uuidv4 } from "uuid";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: string;
}

export class User {
  constructor(private attributes: IUser) {}

  static create(createUser: {
    name: string;
    email: string;
    password: string;
  }): User {
    return new User({
      id: uuidv4(),
      name: createUser.name,
      email: createUser.email,
      password: createUser.password,
      role: "user",
    });
  }

  toPrimitive(): IUser {
    return this.attributes;
  }
}
