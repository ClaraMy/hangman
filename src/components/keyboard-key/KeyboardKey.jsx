import { KeySvg } from '../key-svg/KeySvg';
import React, { useState } from 'react';
import './KeyboardKey.css';

export const Key = ({ letter, onClick, lettersFound }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [color,setColor] = useState('#ffffff');

  const changeClass = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  }

  const className = `key${isPressed ? ' key--pressed' : ''}`;

  const changeColor = () => {
    const isIn = lettersFound.includes(letter);
    if (isIn === true) {
      setColor('#94D9B4');
    }

    if (isIn === false) {
      setColor('#CDCDCD');
    }
  }

  return (
    <div className={className} onClick={() => {
      onClick();
      changeClass();
      changeColor();
    }}>
        <KeySvg color={color}/>
        <p className='key__letter'>{letter}</p>
    </div>
  );
};