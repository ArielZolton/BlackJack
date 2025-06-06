//not bad, but there are better ways
require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/myDatabase";

// Simple connection
mongoose.connect(MONGO_URI);

// Optional: Shortcut to the connection
const db = mongoose.connection;

// Log once connected
db.on("connected", () => {
    console.log("✅ MongoDB connected successfully");
});

// Log errors
db.on("error", (error) => {
    console.error("❌ MongoDB connection error:", error);
});

// Export the db connection if needed elsewhere
module.exports = db;
