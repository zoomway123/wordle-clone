const Keyboard = ({usedKeys, handleKeyClick}) => {
  const row1 = [
    {key: 'q'},
    {key: 'w'},
    {key: 'e'},
    {key: 'r'},
    {key: 't'},
    {key: 'y'},
    {key: 'u'},
    {key: 'i'},
    {key: 'o'},
    {key: 'p'},
  ];

  const row2 = [
    {key: 'a'},
    {key: 's'},
    {key: 'd'},
    {key: 'f'},
    {key: 'g'},
    {key: 'h'},
    {key: 'j'},
    {key: 'k'},
    {key: 'l'},
  ];

  const row3 = [
    {key: 'Del'},
    {key: 'z'},
    {key: 'x'},
    {key: 'c'},
    {key: 'v'},
    {key: 'b'},
    {key: 'n'},
    {key: 'm'},
  ];

  const handleClick = (e) => {
    handleKeyClick(e.target.innerHTML);
  };

  return (
    <div className="keypad">
      {row1.map((element) => {
        const color = usedKeys[element.key];
        return (
          <div key={element.key} className={color} onClick={handleClick}>
            {element.key}
          </div>
        );
      })}
      {row2.map((element) => {
        const color = usedKeys[element.key];
        return (
          <div key={element.key} className={color} onClick={handleClick}>
            {element.key}
          </div>
        );
      })}
      {row3.map((element) => {
        const color = usedKeys[element.key];
        return (
          <div key={element.key} className={color} onClick={handleClick}>
            {element.key}
          </div>
        );
      })}
      <div key={'enter'} className="enter" onClick={handleClick}>
        Enter
      </div>
    </div>
  );
};

export default Keyboard;
