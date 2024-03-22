import React, { useEffect, useState } from 'react';
import Pi from './pi';

const GameOverScreen = ({ setGameState, score, setScore }) => {
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <div className="grid gap-4 text-center place-content-center">
      <h2 className="text-3xl">Game Over!</h2>

      <p>
        You missed a key! Better luck next time. You scored{' '}
        <span className="text-blue-500">{score}</span>.
      </p>

      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
        onClick={() => {
          setGameState('playing');
          setScore(0);
        }}
      >
        Play Again
      </button>

      <button className="" onClick={() => setHintOpen((prev) => !prev)}>
        {hintOpen ? `The digit was ${Pi[score]}` : 'Need a hint?'}
      </button>
    </div>
  );
};

export default GameOverScreen;
