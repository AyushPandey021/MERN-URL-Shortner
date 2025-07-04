import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB URI:", process.env.MONGO_URL);
    console.log(`MongoDB Connected ✔️: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error ❌:", error.message);
    process.exit(1);
  }
};

export default connectDB;
