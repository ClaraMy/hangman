import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';
import { useState } from 'react';

const App = () => {
  // Mot à trouver
  const wordToFind = "apétissant";

  // Fonction pour retirer les accents
  const removeAccents = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  let newWord = removeAccents(wordToFind);
  
  const [word, setWord] = useState(newWord);
  const [lettersFound, setlettersFound] = useState([]);

  function onPress(letter) {
    const inTheWord = word.includes(letter);
    if (inTheWord) {
      setlettersFound([...lettersFound, letter]);
    }
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
          <Word word={word} lettersFound={lettersFound}/>
          <Keyboard onClick={onPress}/>
        </div>
      </main>
    </>
  );
}

export default App;
