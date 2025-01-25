import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    console.error(err.stack);
    process.exit(1); // Exit process with failure
  }
};
