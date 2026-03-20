import mongoose from "mongoose";

export const connectDB = async() => {
  try {
    const mongourl = process.env.MONGO_URL;
    const conn = await mongoose.connect(mongourl);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`DB not connected ${error}`);
  }
}