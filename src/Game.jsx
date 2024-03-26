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

      <div class="relative self-center place-self-center">
        <span>Score:{score}</span>

        {showCorrect && (
          <span className="absolute left-full animate-fade-in">✅</span>
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
