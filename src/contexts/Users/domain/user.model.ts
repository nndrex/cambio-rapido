import { model, Schema } from "mongoose";

import { IUser } from "./user";

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// 3. Create a Model.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const User = model<IUser>("User", userSchema);
