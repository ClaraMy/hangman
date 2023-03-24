import { WordLetter } from '../word-letter/WordLetter';
import React, { useState } from 'react';
import './Word.css';

export const Word = ({ word }) => {
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