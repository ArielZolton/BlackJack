
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./db');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/games', gameRoutes);

// dotenv.config();
// connectDB();

// MongoDB connection (update this to your actual URI)
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
mongoose.connect('mongodb://localhost:27017/blackjack', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
