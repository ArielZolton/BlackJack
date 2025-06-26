const express = require('express');
const mongoose = require('./db');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
app.use(express.json());

// app.get('/deck', (req, res) => {
//   // Return shuffled deck (you can randomize an array of cards)
//   res.json({ deck: shuffleDeck() });
// });

// app.post('/start-game', (req, res) => {
//   const { playerName } = req.body;
//   res.json({ message: `Game started for ${playerName}` });
// });

// function shuffleDeck() {
//   const suits = ['♠', '♥', '♦', '♣'];
//   const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//   const deck = suits.flatMap(s => values.map(v => v + s));
//   return deck.sort(() => Math.random() - 0.5);
// }




////////////////
app.use('/', gameRoutes); // Use the game routes
////////////////

app.listen(3000, () => console.log('Server running on http://localhost:3000')); // console.log('Server running on port 3000'));

