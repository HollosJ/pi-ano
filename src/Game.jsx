import React from 'react';
import { useEffect, useState } from 'react';
import Pi from './pi';
import KeyPad from './KeyPad';

const Game = ({ score, setScore, highScore, setHighScore, setGameState }) => {
  const [index, setIndex] = useState(0);

  const handleInput = (digit) => {
    // If not a digit, return
    if (digit.match(/[0-9]/) === null) return;

    // if the key pressed is the same as the digit at the current index
    if (digit === Pi[index]) {
      // increment the index
      setIndex((prevIndex) => prevIndex + 1);
      // increment the score
      setScore((prevScore) => prevScore + 1);
    } else {
      // if the key pressed is incorrect, set the game state to 'game-over'
      setGameState('gameover');
      // update the high score if the current score is higher
      if (score > highScore) {
        setHighScore(score);
      }
    }
  };

  // listen for keydown events
  useEffect(() => {
    const handleKeyDown = (event) => {
      handleInput(event.key);
    };

    // add the event listener
    window.addEventListener('keydown', handleKeyDown);

    // remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index]);

  return (
    <div className="grid gap-8">
      <h2 className="text-3xl text-center">
        What comes {index === 0 ? 'first' : 'next'}?
      </h2>

      {/* Digits */}
      <div className="flex justify-center">
        <div className="relative text-5xl">
          {index > 0 && (
            // The digits the user has already guessed
            // Insert the period after the first digit
            <span className="absolute text-green-400 -translate-y-1/2 top-1/2 right-8">
              {Pi.slice(0, index)}
            </span>
          )}

          {index ? <span className="text-red-500">?</span> : ''}
        </div>
      </div>

      {/* Keypad */}
      <KeyPad handleInput={handleInput} />
    </div>
  );
};

export default Game;
