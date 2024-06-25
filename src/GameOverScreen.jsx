import React, { useEffect, useState } from 'react';
import Pi from './pi';
import playNotes from './utils/playNotes';

const GameOverScreen = ({ setGameState, score, setScore }) => {
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <div className="grid gap-4 text-center place-items-center">
      <h2 className="text-3xl">Game Over!</h2>

      <p>
        You missed a key! Better luck next time. You scored{' '}
        <span className="font-bold text-violet-700">{score}</span>.
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          className="btn btn--primary"
          onClick={() => {
            setGameState('playing');
            setScore(0);
          }}
        >
          Play Again
        </button>

        <button className="btn btn--secondary" onClick={() => playNotes(score)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </button>
      </div>

      <button className="text-xs" onClick={() => setHintOpen((prev) => !prev)}>
        {hintOpen ? `The digit was ${Pi[score]}` : 'Need a hint?'}
      </button>
    </div>
  );
};

export default GameOverScreen;
