import { KeySvg } from '../key-svg/KeySvg';
import React, { useState } from 'react';
import './KeyboardKey.css';

export const Key = ({ letter, onClick, lettersFound }) => {
  const [isPressed, setIsPressed] = useState(false);

  const changeClass = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  }

  const className = isPressed ? 'key--pressed' : 'key';

  const isLetterInWord = () => {
    lettersFound.includes(letter);
  }

  return (
    <div className={className} onClick={() => {
      onClick();
      changeClass();
    }}>
        <KeySvg status={isLetterInWord}/>
        <p className='key__letter'>{letter}</p>
    </div>
  );
};