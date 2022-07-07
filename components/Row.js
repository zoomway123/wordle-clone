import React from 'react';

const Row = ({guess, currentGuess}) => {
  //   const displayCorrectLetter = (letter) => {
  //     if (letter.color === 'green') {
  //     } else if (letter.color === 'yellow') {
  //     } else if (letter.color === 'grey') {
  //     } else {
  //     }
  //   };

  let styleForCells = ' ';

  if (guess) {
    return (
      <div className="row">
        {guess.map((element, index) => (
          <div key={index} className={element.color}>
            {element.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split('');

    return (
      <div className="row current">
        {letters.map((element, index) => (
          <div key={index} className="filled">
            {element}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((element, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;

// return (
//     <div className="flex justify-center text-center space-x-1.5 my-1">
//       <div className=" block w-10 h-10 text-center uppercase border-2 border-[#3a3a3c] font-bold"></div>
//       <div className=" block w-10 h-10 text-center uppercase border-2 border-[#3a3a3c] font-bold"></div>
//       <div className=" block w-10 h-10 text-center uppercase border-2 border-[#3a3a3c] font-bold"></div>
//       <div className=" block w-10 h-10 text-center uppercase border-2 border-[#3a3a3c] font-bold"></div>
//       <div className=" block w-10 h-10 text-center uppercase border-2 border-[#3a3a3c] font-bold"></div>
//     </div>
//   );
