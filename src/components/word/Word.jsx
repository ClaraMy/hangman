import { useEffect } from 'react';
import './Word.css';

export const Word = ({ word, lettersFound, onWordFound }) => {
    // Fonction pour transformer la chaîne de caractère en un tableau avec chacune des lettres
    let wordLetters = word.split('');

    // fonction pour savoir si toutes les lettres du mot ont été trouvées
    const isWordFound = word.split("").every((letter) =>
      lettersFound.includes(letter)
    );

    useEffect(() => {
      if (isWordFound) {
        onWordFound();
      }
     }, [isWordFound]);

  return (
    <div className='word'>
        {wordLetters.map((letter, index) => (
          <span
            key={index}
          >
            {letter === '-' || lettersFound.includes(letter) ? letter : '_'}
          </span>
        ))}
    </div>
  );
};