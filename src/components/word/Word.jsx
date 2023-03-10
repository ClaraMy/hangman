import { WordLetter } from '../word-letter/WordLetter';
import './Word.css';

export const Word = ({  }) => {
    const wordToFind = "abricot";
    const chars = wordToFind.split('');
    const statut = "hidden";
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