import React from 'react';
import Row from './Row';

const Grid = ({currentGuess, guesses, turn}) => {
  return (
    <div className="mt-16">
      {guesses.map((element, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={element} />;
      })}
    </div>
  );
};

export default Grid;
