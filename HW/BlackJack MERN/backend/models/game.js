const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  playerName: String,
  playerHand: Array, // [String]
  dealerHand: Array, // [String]
  deck: [String],
  status: { 
    type: String, 
    default: 'playing' 
  }, // playing, won, lost
  // createdAt: { type: Date, default: Date.now }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;