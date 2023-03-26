import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';
import { useEffect, useState } from 'react';
import { Modal } from './components/modal/Modal';

// const words = ["voiture", "ordinateur", "aérien"];
// const word = "pile";
const MAX_MISSES = 11;

const App = () => {
  // const API_URL = "http://localhost:3001";
  const [word, setWord] = useState("");

  useEffect(() => {
    // fetch('http://localhost:3001/', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: "locale = fr-FR",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setWord(data.word);
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({locale: 'fr-FR'})
    };
    
    fetch('http://localhost:3001/', options)
      .then(response => response.json())
      .then((data) => {
          setWord(data.word)})
      .catch(err => console.error(err));
  }, []);

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
