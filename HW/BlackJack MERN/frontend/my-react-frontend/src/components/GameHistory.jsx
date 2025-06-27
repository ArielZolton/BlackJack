import { useEffect, useState } from 'react';

function GameHistory() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/api/games') // 3000
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div>
      <h3>Game History</h3>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            {game.player}: {game.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameHistory;
