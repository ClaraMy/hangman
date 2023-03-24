import { WordLetter } from '../word-letter/WordLetter';
import './Word.css';

export const Word = ({ word }) => {
    // Fonction pour transformer la chaîne de caractère en un tableau avec chacune des lettres
    let chars = word.split('');
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