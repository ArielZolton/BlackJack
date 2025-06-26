import React, { useState } from 'react';

function StartGame({ onGameStarted }) {     // no params?
  const [player, setPlayer] = useState('');
  // const [message, setMessage] = useState('');

  const startGame = async () => {
    const res = await fetch('http://localhost:3000/api/start-game', {  // 'http://localhost:3000/start-game'
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerName: player })
      // setMessage(res.data.message); // onGameStarted(res.data);
    });
    const data = await res.json();
    onGameStarted(data);
  };

  return (
    <div>
      <input 
        value={player} 
        onChange={(e) => setPlayer(e.target.value)} 
        placeholder="Your name" 
      />
      <button onClick={startGame}>Start Game</button>
      {/* <p>{message}</p> */}
    </div>
  );
}

export default StartGame;
