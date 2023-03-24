import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';
import { useState } from 'react';

const App = () => {
  // Mot à trouver
  const wordApi = "apétissant";

  // Fonction pour retirer les accents
  const removeAccents = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const wordToFind = removeAccents(wordApi);
  const [word, setWord] = useState('');
  const [lettersFound, setLettersFound] = useState([]);

  function onPress(letter) {
    const inTheWord = wordToFind.includes(letter);
    if (inTheWord == true) {
      setLettersFound([...lettersFound, letter]);
    }
    const newWord = word
      .split('')
      .map((l) => (lettersFound.includes(l) ? l : '_'))
      .join('');
    setWord(newWord);
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
          <Word word={wordToFind} lettersFound={lettersFound}/>
          <Keyboard onClick={onPress} lettersFound={lettersFound}/>
        </div>
      </main>
    </>
  );
}

export default App;
