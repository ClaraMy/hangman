import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';
import { useEffect, useState } from 'react';
import { Modal } from './components/modal/Modal';

const MAX_MISSES = 11;

const App = () => {
  // -- CONSTANTES --
  const [word, setWord] = useState(""); // mot à trouver
  const API_URL = 'http://localhost:3001/'; // url de l'API
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({locale: 'fr-FR'})
  }; 
  const [lettersFound, setLettersFound] = useState([]); // tableau contenant les lettres qui ont été trouvées
  const [wordFound, setWordFound] = useState(false); // false si le mot n'est pas trouvé / true si trouvé
  const [misses, setMisses] = useState(0); // compteur avec le nombre d'erreur

  // -- FONCTIONS --
  // fonction pour retirer les accents
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // fonction pour générer un mot
  const getRandomWord = () => {
    fetch(API_URL, options)
      .then(response => response.json())
      .then((data) => {
          const newWord = removeAccents(data.word.toLowerCase());
          setWord(newWord)
        })
      .catch(err => console.error(err));
  }

  // fonction pour changer les constantes lettersFound et misses au clic d'une touche
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

  // fonction pour rejouer qui réinitialise tout
  const handleReplay = () => {
    setWordFound(false);
    setLettersFound([]);
    setMisses(0);
    getRandomWord();
  }

  const isGameOver = misses === MAX_MISSES;

  // fonction pour changer de message en fonction du nombre d'erreur  
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

  useEffect(() => {
    getRandomWord();
  }, []);
  
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
