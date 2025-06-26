import React, { useState } from 'react';
import GameBoard from './components/gameBoard';
import StartGame from './components/startGame';
import GameHistory from './components/gameHistory';

function App() {
  const [game, setGame] = useState(null);

  return (
    <div>
      <h1>🃏 Blackjack Game</h1>
      {!game ? (
        <StartGame onGameStarted={setGame} />
      ) : (
        <GameBoard game={game} setGame={setGame} />
      )}
      <GameHistory />
    </div>
  );
}

export default App;
