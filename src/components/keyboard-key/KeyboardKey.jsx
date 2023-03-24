import { ReactComponent as KeySvg } from '../../assets/key.svg';
import React, { useState } from 'react';
import './KeyboardKey.css';

export const Key = ({ letter, onClick, lettersFound }) => {
  const isLetterInWord = lettersFound.includes(letter);
  const [isPressed, setIsPressed] = useState(false);

  function changeClass() {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  }

  // const className = pressed ? 'key--pressed' : 'key';
  const className =  `key ${isLetterInWord ? 'key--found' : ''} ${isPressed ? 'key--pressed' : ''}`;

  return (
    <div className={className} onClick={() => {
      onClick();
      changeClass();
    }}>
        <KeySvg />
        <p className='key__letter'>{letter}</p>
    </div>
  );
};