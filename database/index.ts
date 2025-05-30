import mongoose from "mongoose";
import "dotenv/config";

export const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
