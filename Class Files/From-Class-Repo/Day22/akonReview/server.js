require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connection");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

// Start server
async function startServer() {
    await connectDB();
    
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}
startServer();