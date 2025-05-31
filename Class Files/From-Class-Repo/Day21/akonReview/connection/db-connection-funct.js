//best option 
require("dotenv").config();
const mongoose = require("mongoose");


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/myDatabase";

// Create an async function to connect
async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI, {
            bufferTimeoutMS: 3000, 
            connectTimeoutMS: 3000,
        });
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process if unable to connect
    }
}

// Export the connection function
module.exports = connectDB;
