const express = require('express');
const mongoose = require('./db');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
app.use(express.json());
app.use('/api', gameRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
