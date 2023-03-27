import { KeySvg } from '../key-svg/KeySvg';
import React, { useEffect, useState } from 'react';
import './KeyboardKey.css';

export const Key = ({ letter, onClick, lettersFound }) => {
  // -- CONSTANTES --
  const [isPressed, setIsPressed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState("#FFFFFF");
  const className = `key${isPressed ? ' key--pressed' : ''}`;

  // -- FONCTIONS --
  // fonction pour changer la classe de la touche au clic
  const changeClass = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  }

  // fonction pour changer l'arrière-plan couleur de la touche
  const changeColor = () => {
    onClick(letter);
    setIsClicked(true);
  }

  // -- USEEFFECT --
  // faire qu'à chaque clic ça met à jour la couleur
  useEffect(() => {
    if (isClicked) {
      setColor(lettersFound.includes(letter) ? "#94D9B4" : "#CDCDCD");
    }
  }, [isClicked]);

  // faire qu'à chaque fois que le tableau lettersFound est vide (quand on rejoue), cela réinitialise la couleur des touches
  useEffect(() => {
    if (lettersFound.length === 0) {
      setColor("#FFFFFF");
    }
  }, [lettersFound]);

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