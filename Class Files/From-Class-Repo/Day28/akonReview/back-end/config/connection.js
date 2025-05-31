import 'dotenv/config'
import mongoose from "mongoose";

const { MONGO_URI = "mongodb://localhost:27017/myDatabase" } = process.env;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectDB;