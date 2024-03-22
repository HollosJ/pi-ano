import React, { useEffect } from 'react';

const StartScreen = ({ startGame, highScore, setScore }) => {
  useEffect(() => {
    // Listen for enter key to start game
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        startGame();
        setScore(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [startGame]);

  return (
    <div className="grid gap-4 text-center place-content-center">
      <h1 className="text-3xl md:text-4xl">Welcome to Pi-ano</h1>

      {highScore ? (
        <p className="text-lg md:text-xl">
          Your high score is {highScore}. Can you beat it?
        </p>
      ) : null}

      {/* User can press enter or click start game */}
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
        onClick={() => startGame()}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;
