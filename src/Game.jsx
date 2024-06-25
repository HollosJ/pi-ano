import React from 'react';
import { useEffect, useState } from 'react';
import Pi from './pi';
import KeyPad from './KeyPad';
import noteMap from './noteMap';

const Game = ({ score, setScore, highScore, setHighScore, setGameState }) => {
  const [index, setIndex] = useState(0);

  const [showCorrect, setShowCorrect] = useState(false);

  // Show a tick every time the user enters a correct digit
  useEffect(() => {
    if (index > 0) {
      setShowCorrect(true);
      const timeout = setTimeout(() => {
        setShowCorrect(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleInput = (digit) => {
    // If not a digit, return
    if (digit.match(/[0-9]/) === null) return;

    // if the key pressed is the same as the digit at the current index
    if (digit === Pi[index]) {
      // play the note corresponding to the digit
      noteMap.get(digit).cloneNode().play();

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
        localStorage.setItem('highScore', score);
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
    <div className="grid content-center gap-4 text-center place-content-center">
      <h2 className="text-4xl">
        What digit comes {index === 0 ? 'first' : 'next'}?
      </h2>

      <div className="relative self-center place-self-center">
        <span>Score:{score}</span>
        {showCorrect && (
          <svg
            className="absolute top-0 ml-4 -mt-3 size-12 fill-green-600 left-full animate-fade-in"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Digits */}
      <div className="flex justify-center">
        <div className="relative font-black text-7xl md:text-9xl">
          {index > 0 && (
            // The digits the user has already guessed
            <span className="absolute -translate-y-1/2 right-12 md:right-16 text-violet-600/50 top-1/2">
              {Pi.substring(0, 1) + '.' + Pi.substring(1, index)}
            </span>
          )}

          <span className="font-normal text-violet-600">?</span>
        </div>
      </div>

      {/* Keypad */}
      <KeyPad handleInput={handleInput} />
    </div>
  );
};

export default Game;
