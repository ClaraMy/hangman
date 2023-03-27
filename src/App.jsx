import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';
import { useEffect, useState } from 'react';
import { Modal } from './components/modal/Modal';

const MAX_MISSES = 11;

const App = () => {
  const [word, setWord] = useState("");

  // Fonction pour retirer les accents
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  const getRandomWord = () => {
    const API_URL = 'http://localhost:3001/';

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({locale: 'fr-FR'})
    };
    
    fetch(API_URL, options)
      .then(response => response.json())
      .then((data) => {
          const newWord = removeAccents(data.word.toLowerCase());
          setWord(newWord)
          console.log(newWord)
        })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getRandomWord();
  }, []);

  const [lettersFound, setLettersFound] = useState([]);
  const [wordFound, setWordFound] = useState(false);
  const [misses, setMisses] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // // fonction pour choisir le mot à trouver
  // const chooseWord = () => {
  //   const randomIndex = Math.floor(Math.random() * words.length);
  //   setWord(words[randomIndex]);
  //   const wordToFind = removeAccents(word);
  //   setWord(wordToFind);
  // };

  const onPress = (letter) => {
    const inTheWord = word.includes(letter);
    if (inTheWord === true) {
      setLettersFound([...lettersFound, letter]);
    } else {
      setMisses(misses + 1);
    }
  }

  // fonction pour afficher la popup
  const handleWordFound = () => {
    setWordFound(true);
  }

  // fonction pour rejouer
  const handleReplay = () => {
    setWordFound(false);
    setLettersFound([]);
    setMisses(0);
    setIsPlaying(true);
    getRandomWord();
  }

  const isGameOver = misses === MAX_MISSES;

  const getMessage = (misses) => {
    if (misses === MAX_MISSES) {
      return "Vous êtes mort !";
    } else if (misses === MAX_MISSES - 1) {
      return "un dernier souhait ?";
    } else if (misses === MAX_MISSES - 2) {
      return "oh oh la mort approche";
    } else if (misses === 0) {
      return "tout va bien :))";
    } else if (misses === 1) {
      return "l'installation commence";
    } else if (misses === 2) {
      return "une barre de plus";
    } else if (misses === 3) {
      return "ce n'est pas grave";
    } else if (misses === 4) {
      return "commencez a paniquer";
    } else if (misses === 5) {
      return "hmm vous allez bien ?";
    } else if (misses > 0) {
      return `Il vous reste ${MAX_MISSES - misses} essais`;
    } else {
      return "";
    }
  };
  
  return (
    <>
      <Header />
      <main>
        <div className='hangman-side'>
          <Hangman misses={misses} />
          <Message text={getMessage(misses)}/>
        </div>
        <div className='word-side'>
          <Word word={word} lettersFound={lettersFound} onWordFound={handleWordFound}/>
          <Keyboard lettersFound={lettersFound} onClick={onPress} />
        </div>
        {(wordFound || isGameOver) && <Modal word={word} win={wordFound} onClose={handleReplay}/>}
      </main>
    </>
  );
}

export default App;
