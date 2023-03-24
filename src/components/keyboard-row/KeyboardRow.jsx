import { Key } from '../keyboard-key/KeyboardKey';
import './KeyboardRow.css';

export const Row = ({ letters, onClick, lettersFound }) => {
  return (
    <div className='keyboard__row'>
      {letters.map((letter) => (
        <Key key={letter} letter={letter} onClick={() => onClick(letter)} />
      ))}
    </div>
  );
};