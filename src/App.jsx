import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';
import { useState } from 'react';
import { Modal } from './components/modal/Modal';

const App = () => {
  const [lettersFound, setLettersFound] = useState([]);
  const [wordFound, setWordFound] = useState(false);
  // Mot à trouver
  const wordApi = "apétissant";

  // Fonction pour retirer les accents
  const removeAccents = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const wordToFind = removeAccents(wordApi);
  // const [word, setWord] = useState('');

  const onPress = (letter) => {
    const inTheWord = wordToFind.includes(letter);
    if (inTheWord === true) {
      setLettersFound([...lettersFound, letter]);
    }
    // const newWord = word
    //   .split('')
    //   .map((l) => (lettersFound.includes(l) ? l : '_'))
    //   .join('');
    // setWord(newWord);
  }

  // fonction pour afficher la popup
  const handleWordFound = () => {
    setWordFound(true);
  }

  // fonction pour rejouer
  const handleReplay = () => {
    setWordFound(false);
    setLettersFound([]);
  }
  
  return (
    <>
      <Header />
      <main>
        <div className='hangman-side'>
          <Hangman />
          <Message text="tout va bien ((:"/>
        </div>
        <div className='word-side'>
          <Word word={wordToFind} lettersFound={lettersFound} onWordFound={handleWordFound}/>
          <Keyboard lettersFound={lettersFound} onClick={onPress} />
        </div>
        {wordFound && <Modal word={wordToFind} win={wordFound} onClose={handleReplay}/>}
      </main>
    </>
  );
}

export default App;
