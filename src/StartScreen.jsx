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
    <div className="grid items-center gap-4 text-center place-items-center">
      <h1 className="text-3xl md:text-4xl">Welcome to Pi-ano</h1>

      <p className="text-lg md:text-xl">
        Try and memorize as many digits of Pi as you can!
      </p>

      {highScore ? (
        <p className="">
          Your high score is <span className="font-bold">{highScore}</span>. Can
          you beat it?
        </p>
      ) : null}

      {/* User can press enter or click start game */}
      <button className="btn" onClick={() => startGame()}>
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;
