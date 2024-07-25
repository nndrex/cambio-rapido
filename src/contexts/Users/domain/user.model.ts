import { model, Schema } from "mongoose";

import { IUser } from "./user";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

export const User = model<IUser>("User", userSchema);
