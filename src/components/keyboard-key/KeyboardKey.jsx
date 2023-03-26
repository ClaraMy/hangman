import { KeySvg } from '../key-svg/KeySvg';
import React, { useEffect, useState } from 'react';
import './KeyboardKey.css';

export const Key = ({ letter, onClick, lettersFound }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState("#FFFFFF");

  const changeClass = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  }

  const className = `key${isPressed ? ' key--pressed' : ''}`;

  useEffect(() => {
    if (isClicked) {
      setColor(lettersFound.includes(letter) ? "#94D9B4" : "#CDCDCD");
    }
  }, [isClicked]);

  useEffect(() => {
    if (lettersFound.length === 0) {
      setColor("#FFFFFF");
    }
  }, [lettersFound]);

  const changeColor = () => {
    onClick(letter);
    setIsClicked(true);
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