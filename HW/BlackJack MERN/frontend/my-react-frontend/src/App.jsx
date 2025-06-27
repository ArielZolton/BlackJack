import React, { useState } from 'react';
// import GameBoard from './components/GameBoard';
// import StartGame from './components/StartGame';
// import GameHistory from './components/GameHistory';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import GameTable from './components/GameTable';
import Rules from './components/Rules';

function App() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onGameStarted = (gameData) => {
    setGame(gameData);
    setError(null);
    setLoading(false);
  };

  const onError = (msg) => {
    setError(msg);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className='header'>
        <h1>🃏 Blackjack Game</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/table">Game Table</Link>
          <Link to="/rules">Rules</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<GameTable />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Blackjack</p>
      </footer>
      
      {!game ? (
        <StartGame
          onGameStarted={onGameStarted}
          setLoading={setLoading}
          setError={onError}
        />
      ) : (
        <GameBoard
          game={game}
          setGame={setGame}
          setLoading={setLoading}
          setError={onError}
        />
      )}
      <GameHistory />
    </div>
  );
}

export default App;
