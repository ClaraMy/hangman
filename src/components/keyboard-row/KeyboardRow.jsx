import { Key } from '../keyboard-key/KeyboardKey';
import './KeyboardRow.css';

export const Row = ({ letters }) => {

    const letter = letters.map((letter) =>
        <Key letter={letter} />
    );

  return (
    <div className='keyboard__row'>
        {letter}
    </div>
  );
};