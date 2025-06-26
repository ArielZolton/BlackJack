
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./backend/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const gameRoutes = require('./backend/routes/gameRoutes');
app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));