import "dotenv/config";
import express from "express";
import connectDB from "./config/connection.js";
import routes from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve React app in production
if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(path.resolve(), "client/build");
  app.use(express.static(clientPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

// Routes
app.use(routes);

// Start server
const startServer = async () => {
    await connectDB();
    
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
};

startServer();