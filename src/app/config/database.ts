import mongoose from "mongoose";

//connect().catch(error => console.error(error));
export async function connect() {
  await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/",
  );
}
