import { ReactComponent as KeySvg } from '../../assets/key.svg';
import React, { useState } from 'react';
import './KeyboardKey.css';

export const Key = ({ letter, onClick, lettersFound }) => {
  const [pressed, setPressed] = useState(false);

  function changeClass() {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 300);
  }

  const className = pressed ? 'key--pressed' : 'key';

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