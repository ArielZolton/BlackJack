require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/myDatabase");

        const user = new User({
            name: "Jane Smith",
            email: "jane2@example.com",
            age: 25,
        });

        
        await user.save();
        console.log("✅ User seeded successfully!");

        await mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error seeding user:", error);
    }
}

seed();
