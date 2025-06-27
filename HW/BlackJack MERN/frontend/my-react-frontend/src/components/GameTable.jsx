import React from 'react';

function GameTable() {
  return (
    <main className="flex-1 max-w-4xl mx-auto p-4 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-2">Dealer's Cards</h2>
        <ul className="list-disc ml-5">
          <li>three of diamonds</li>
          <li>five of clubs</li>
          <li>queen of hearts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Player's Cards</h2>
        <ul className="list-disc ml-5">
          <li>two of diamonds</li>
          <li>jack of clubs</li>
          <li>ace of spades</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Player's Options</h2>
        <ul className="list-disc ml-5">
          <li>hit: take another card</li>
          <li>stand: keep the cards you have</li>
          <li>double down: take one more card and double your bet</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Player's Actions</h2>
        <button className="bg-gray-700 text-white px-4 py-2 rounded shadow">Hit</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded shadow">Stand</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded shadow">Split</button>
      </section>

      <section id="betting">
        <h2 className="text-2xl font-bold">Place Your Bet</h2>
        <p className="text-lg">Bankroll: <span id="bankroll" className="font-mono">$2022</span></p>
        <input type="number" id="wager" min="10"
          className="w-full p-2 border border-gray-400 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your wager"
        />
        <button id="bet-button" className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded font-bold w-full">Bet</button>
      </section>
    </main>
  );
}

export default GameTable;

{/* <script src="script.js"></script> */}
