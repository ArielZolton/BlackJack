import React, { useState } from 'react';

function StartGame({  onGameStarted, setLoading, setError  }) {
  const [player, setPlayer] = useState('');
  // const [message, setMessage] = useState('');

  const startGame = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch('/api/games/start-game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerName: player }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to start game');
      }

      const data = await res.json();
      onGameStarted(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
    // onGameStarted(data);
  };

  return (
    <div>
      <input 
        value={player} 
        onChange={(e) => setPlayer(e.target.value)} 
        placeholder="Your name" 
      />
      <button onClick={startGame} disabled={!player.trim()}>
        Start Game
      </button>
      {/* <p>{message}</p> */}
    </div>
  );
}

export default StartGame;
