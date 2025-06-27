const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.get('/all-games', gameController.getAllGames);
router.get('/game/:id', gameController.getGameById);

router.post('/', gameController.createGame);
router.post('/start-game', gameController.startGame);
router.post('/hit/:id', gameController.hitCard);
router.post('/stand/:id', gameController.standGame);

router.delete('/delete/:id', gameController.deleteGame);

module.exports = router;
