import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';
import { useState } from 'react';
import { Modal } from './components/modal/Modal';

const App = () => {
  // Mot à trouver
  const wordApi = "apétissant";

  // Fonction pour retirer les accents
  const removeAccents = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const wordToFind = removeAccents(wordApi);
  // const [word, setWord] = useState('');
  const [lettersFound, setLettersFound] = useState([]);

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

  let state = "win";
  const [textReplay, setTextReplay] = useState('');
  const [textHome, setTextHome] = useState('');
  const subtextReplay = "(rejouer)";
  const subtextHome = "(retourner au menu)";

  // fonction pour le texte des boutons de la pop up
  const addText = () => {
    if (state === "win") {
      textReplay = "risquer encore sa vie";
      textHome = "partir de cet enfer";
    }

    if (state === "lose") {
      textReplay = "mourir de nouveau";
      textHome = "accepter la mort";
    }

    setTextReplay(...textReplay);
    setTextHome(...textHome);
  }

  addText();
  
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
        <Modal state="win" textReplay={textReplay} textHome={textHome} subtextReplay={subtextReplay} subtextHome={subtextHome}/>
      </main>
    </>
  );
}

export default App;
