// import React, { useEffect, useState } from 'react';

function GameBoard({ game, setGame }) {     // no params??
  // const [games, setGames] = useState([]);
  // const [playerName, setPlayerName] = useState('');

  const hit = async () => {
    const res = await fetch(`http://localhost:3000/api/hit/${game._id}`, {
      method: 'POST',
    });
    const data = await res.json();
    setGame(data); // setGame(res.data);
  };

  const stand = async () => {
    const res = await fetch(`http://localhost:3000/api/stand/${game._id}`, {
      method: 'POST',
    });
    const data = await res.json();
    setGame(data);      // setGame(res.data);
  };

  // const startGame = () => {
  //   fetch('/api/games', {
  //     playerName,
  //     deck: [],
  //     playerHand: [],
  //     dealerHand: [],
  //     result: "in progress"
  //   }).then(res => setGames(prev => [...prev, res.data]));
  // };

  return (
    <div>
      <h2>Player: {game.player}</h2>
      <p>Your Cards: {game.playerCards.join(', ')}</p>
      <p>Dealer Cards: {game.dealerCards.join(', ')}</p>
      <p>Status: {game.status}</p>
      {game.status === 'playing' && (
        <>
          <button onClick={hit}>Hit</button>
          <button onClick={stand}>Stand</button>
        </>
      )}
    </div>
  );
}

export default GameBoard;
