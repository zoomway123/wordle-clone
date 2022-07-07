import React, {useEffect, useState} from 'react';
import useWorlde from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';
import Modal from './Modal';

const Game = ({solution}) => {
  const {currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys} =
    useWorlde(solution);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);

      window.removeEventListener('keyup', handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener('keyup', handleKeyUp);
    }

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp, isCorrect]);

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
};

export default Game;
