import Header from '../components/Header';
import Game from '../components/Game';
import Keyboard from '../components/Keyboard';
import {useEffect, useState} from 'react';

export default function Home() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const getWords = async () => {
      const data = await fetch('/api/words');
      const response = await data.json();
      const randomWord =
        response.words[Math.floor(Math.random() * response.words.length)];
      setSolution(randomWord);
    };

    getWords();
  }, [setSolution]);

  return (
    <div className="bg-[#121213] h-screen font-">
      <Header />
      {solution && <Game solution={solution} />}
    </div>
  );
}
