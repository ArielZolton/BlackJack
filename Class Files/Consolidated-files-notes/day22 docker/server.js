require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- 1. Middleware ----------
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// ---------- 2. DB Connection ----------
(async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            bufferTimeoutMS: 1000,
            connectTimeoutMS: 1000,
        });
        console.log("✅ successfully connected to MongoDB");
    } catch (error) {
        console.error("❌ error connecting to MongoDB", error);
        process.exit(1);
    }
})();

// ---------- 3. Routes ----------
const userRouter = require("./routes/userRoutes");
app.use("/api/users", userRouter);

// ping route, health check
app.get("/ping", (req, res) => {
    res.send("pong");
});

// ---------- 4. Start Server ----------
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});