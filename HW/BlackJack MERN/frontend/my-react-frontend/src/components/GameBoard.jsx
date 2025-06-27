function GameBoard({ game, setGame, setLoading, setError }) {
  const hit = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/games/hit/${game._id}`,
        { method: 'POST' }
      );
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to hit card');
      }
      const data = await res.json();
      setGame(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const stand = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/games/stand/${game._id}`,
        { method: 'POST' }
      );
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to stand');
      }
      const data = await res.json();
      setGame(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Win/loss message based on game.status
  const getResultMessage = () => {
    if (game.status === 'won') return "🎉 You won!";
    if (game.status === 'lost') return "😞 You lost.";
    if (game.status === 'playing') return "Game in progress...";
    return null;
  };

  return (
    <div>
      <h2>Player: {game.player}</h2>
      <p>Your Cards: {game.playerHand.join(', ')}</p>
      <p>Dealer Cards: {game.dealerHand.join(', ')}</p>
      <p>Status: {game.status}</p>
      <p>{getResultMessage()}</p>

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
