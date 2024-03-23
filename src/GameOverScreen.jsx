import React, { useEffect, useState } from 'react';
import Pi from './pi';

const GameOverScreen = ({ setGameState, score, setScore }) => {
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <div className="grid gap-4 text-center place-items-center">
      <h2 className="text-3xl">Game Over!</h2>

      <p>
        You missed a key! Better luck next time. You scored{' '}
        <span className="font-bold text-violet-700">{score}</span>.
      </p>

      <button
        className="btn"
        onClick={() => {
          setGameState('playing');
          setScore(0);
        }}
      >
        Play Again
      </button>

      <button className="text-xs" onClick={() => setHintOpen((prev) => !prev)}>
        {hintOpen ? `The digit was ${Pi[score]}` : 'Need a hint?'}
      </button>
    </div>
  );
};

export default GameOverScreen;
