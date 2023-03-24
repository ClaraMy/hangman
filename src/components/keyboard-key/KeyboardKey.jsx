import { ReactComponent as KeySvg } from '../../assets/key.svg';
import React, { useState } from 'react';
import './KeyboardKey.css';

export const Key = ({ letter }) => {
  const [pressed, setPressed] = useState(false);

  function changeClass() {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 300);
  }

  const className = pressed ? 'key__svg--pressed' : 'key__svg';

  return (
    <div className='key'>
        <KeySvg className={className} onClick={changeClass}/>
        <p className='key__letter'>{letter}</p>
    </div>
  );
};