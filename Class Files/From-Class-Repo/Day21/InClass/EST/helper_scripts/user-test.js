require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");
const MONGO_URI = process.env.MONGO_URI;


const createUser = async () => {
    try {
        const u = await User.create({
            username: "testuser",
            email: "testuser@test.com",
            password: "password",
            balance: 100,
        });
        console.log(u);
    } catch (error) {
        console.error("❌ error creating user", error);
    }
}
// ---------- 1. DB Connection ----------
(async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            bufferTimeoutMS: 1000,
            connectTimeoutMS: 1000,
        });
        console.log("✅ successfully connected to MongoDB");
        await createUser();

    } catch (error) {
        console.error("❌ error connecting to MongoDB", error);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        console.log("✅ successfully disconnected from MongoDB");
        process.exit(0);
    }
})();
