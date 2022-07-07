import {useEffect, useState} from 'react';

import React from 'react';

const Keyboard = ({usedKeys}) => {
  const keyboard = [
    {key: 'a'},
    {key: 'b'},
    {key: 'c'},
    {key: 'd'},
    {key: 'e'},
    {key: 'f'},
    {key: 'g'},
    {key: 'h'},
    {key: 'i'},
    {key: 'j'},
    {key: 'k'},
    {key: 'l'},
    {key: 'm'},
    {key: 'n'},
    {key: 'o'},
    {key: 'p'},
    {key: 'q'},
    {key: 'r'},
    {key: 's'},
    {key: 't'},
    {key: 'u'},
    {key: 'v'},
    {key: 'w'},
    {key: 'x'},
    {key: 'y'},
    {key: 'z'},
  ];

  const [letters, setLetters] = useState(keyboard);

  return (
    <div className="keypad">
      {letters.map((element) => {
        const color = usedKeys[element.key];
        return (
          <div key={element.key} className={color}>
            {element.key}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
