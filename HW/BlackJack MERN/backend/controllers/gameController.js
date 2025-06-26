const Game = require('../models/game');

const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function createDeck() {
  return suits.flatMap(s => values.map(v => `${v}${s}`)).sort(() => Math.random() - 0.5);
}

function dealCard(deck) {
  return deck.pop();
}

function handValue(cards) {
  let total = 0;
  let aces = 0;
  for (const card of cards) {
    const value = card.slice(0, -1);
    if (['J', 'Q', 'K'].includes(value)) total += 10;
    else if (value === 'A') {
      total += 11;
      aces += 1;
    } else {
      total += parseInt(value);
    }
  }
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }
  return total;
}

const startGame = async (req, res) => {
  const deck = createDeck();
  const playerCards = [dealCard(deck), dealCard(deck)];
  const dealerCards = [dealCard(deck), dealCard(deck)];
  const game = await Game.create({ 
    player: req.body.playerName, 
    playerCards, 
    dealerCards,
    deck,
    status: 'playing',
  });
  res.json(game);
};

const hitCard = async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (!game || game.status !== 'playing') return res.status(400).json({ error: 'Invalid game' });

  const deck = game.deck;
  const newCard = dealCard(deck);
  game.playerCards.push(newCard);
  game.deck = deck;
  await game.save();
  res.json(game);
};

const standGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (!game || game.status !== 'playing') return res.status(400).json({ error: 'Invalid game' });

  const deck = game.deck;
  while (handValue(game.dealerCards) < 17) {
    game.dealerCards.push(dealCard(deck));
  }

  const playerTotal = handValue(game.playerCards);
  const dealerTotal = handValue(game.dealerCards);

  if (playerTotal > 21) game.status = 'lost';
  else if (dealerTotal > 21 || playerTotal > dealerTotal) game.status = 'won';
  else game.status = 'lost';

  game.deck = deck;
  await game.save();
  res.json(game);
};

const getAllGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

const getGameById = async (req, res) => {
  // res.json({ message: `Game ID: ${req.params.id}` });
  const game = await Game.findById(req.params.id);
  if (!game) return res.status(404).json({ error: 'Game not found' });
  res.json(game);
};

const createGame = async (req, res) => {
  const newGame = new Game(req.body);
  const saved = await newGame.save();
  res.status(201).json(saved);
};

const deleteGame = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  startGame,
  hitCard,
  standGame,
  getAllGames,
  getGameById,
  createGame,
  deleteGame,
};
