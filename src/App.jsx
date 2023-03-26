import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';
import { useEffect, useState } from 'react';
import { Modal } from './components/modal/Modal';

// const words = ["voiture", "ordinateur", "aérien"];
const word = "pile";
const MAX_MISSES = 9;

const App = () => {
  // const [word, setWord] = useState("");
  const [lettersFound, setLettersFound] = useState([]);
  const [wordFound, setWordFound] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);
  const [misses, setMisses] = useState(0);

  // remet tout à zéro si le joueur veut rejouer
  useEffect(() => {
    if (isReplaying) {
      setLettersFound([]);
      setWordFound(false);
      setIsReplaying(false);
    }
  }, [isReplaying]);

  // Fonction pour retirer les accents
  const removeAccents = (str) => {
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

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
  }

  const isGameOver = misses === MAX_MISSES;
  
  return (
    <>
      <Header />
      <main>
        <div className='hangman-side'>
          <Hangman misses={misses} />
          <Message text="tout va bien ((:"/>
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
