import { useEffect, useState } from 'react';
import './index.css';
// Supports weights 100-800
import '@fontsource-variable/jetbrains-mono';

// Import components
import Game from './Game';
import GameOverScreen from './GameOverScreen';
import Nav from './Nav';
import StartScreen from './StartScreen';

// The main app component
function App() {
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Check if the user has played before
  useEffect(() => {
    const savedHighScore = localStorage.getItem('highScore');

    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  return (
    <>
      <Nav highScore={highScore} />

      <div className="container my-8">
        {/* User has not started game yet */}
        {gameState === 'start' && (
          <StartScreen
            startGame={() => setGameState('playing')}
            setScore={setScore}
            highScore={highScore}
          />
        )}

        {/* User is playing the game */}
        {gameState === 'playing' && (
          <Game
            setGameState={setGameState}
            score={score}
            setScore={setScore}
            highScore={highScore}
            setHighScore={setHighScore}
          />
        )}

        {/* User has lost the game */}
        {gameState === 'gameover' && (
          <GameOverScreen
            setGameState={setGameState}
            score={score}
            setScore={setScore}
          />
        )}
      </div>
    </>
  );
}

export default App;
