import { WordLetter } from '../word-letter/WordLetter';
import './Word.css';

export const Word = ({  }) => {
    const wordToFind = "apétissant";
    const removeAccents = str =>
      str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let newWord = removeAccents(wordToFind);
    console.log(newWord);

    let chars = newWord.split('');

    const statut = "visible";
    const letter = chars.map((letter) =>
        <WordLetter statut={statut} letter={letter} />
    );

    // const onClick = ( keyLetter ) => {
    //     chars.map((wordLetter) => 
    //         if (keyLetter === wordLetter) {
    //             statut = "visible";
    //         }
    //     )
    // }


  return (
    <div className='word'>
        {letter} 
    </div>
  );
};