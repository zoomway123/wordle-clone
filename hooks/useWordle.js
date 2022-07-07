import {useState} from 'react';

const useWordle = (solution) => {
  //
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // past gueeses are a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  //format a guess into an array of letter objects
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return {key: letter, color: 'grey'};
    });

    //find green letters (same letter same position)
    formattedGuess.forEach((element, index) => {
      if (solutionArray[index] === element.key) {
        formattedGuess[index].color = 'green';
        solutionArray[index] = null;
      }
    });

    //find yellow letters
    formattedGuess.forEach((element, index) => {
      if (solutionArray.includes(element.key) && element.color !== 'green') {
        formattedGuess[index].color = 'yellow';
        solutionArray[solutionArray.indexOf(element.key)] = null;
      }
    });

    return formattedGuess;
  };

  //add a new guess to guesses state
  //update if guess is corect
  //add turn to state
  const addNewGuess = (guess) => {
    console.log('GUESS:', guess, solution);
    if (currentGuess === solution) {
      console.log('u win');
      setIsCorrect(true);
    }
    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = guess;
      return newGuesses;
    });
    setHistory((prev) => {
      return [...prev, currentGuess];
    });
    setTurn((prev) => {
      return prev + 1;
    });

    setUsedKeys((prev) => {
      let newKeys = {...prev};

      guess.forEach((element) => {
        const currentColor = newKeys[element.key];

        if (element.color === 'green') {
          newKeys[element.key] = 'green';
          return;
        }
        if (element.color === 'yellow' && currentColor !== 'green') {
          newKeys[element.key] = 'yellow';
          return;
        }
        if (
          element.color === 'grey' &&
          currentColor !== 'green' &&
          currentColor !== 'yellow'
        ) {
          newKeys[element.key] = 'grey';
          return;
        }
      });
      return newKeys;
    });

    setCurrentGuess('');
  };

  //hanlde keydowne vent and track current guess
  //if user presses ENTER, add the guess
  const handleKeyUp = ({key}) => {
    if (key === 'Enter') {
      //only add if turn is less than 5
      if (turn > 5) {
        console.log('used all guesses');
        return;
      }
      // cannot be duplicate
      if (history.includes(currentGuess)) {
        console.log('duplicate word');
        return;
      }
      //must be 5 char long
      if (currentGuess.length !== 5) {
        console.log('not long enough');
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    history,
    isCorrect,
    handleKeyUp,
    usedKeys,
  };
};

export default useWordle;
