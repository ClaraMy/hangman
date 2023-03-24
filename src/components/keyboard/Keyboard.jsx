
import { Row } from '../keyboard-row/KeyboardRow';
import './Keyboard.css';

const row1 = ["a","z","e","r","t","y","u","i","o","p"];
const row2 = ["q","s","d","f","g","h","j","k","l","m"];
const row3 = ["w","x","c","v","b","n"];


export const Keyboard = ({ onClick, lettersFound }) => {
  return (
    <div className='keyboard'>
        <Row onClick={onClick} letters={row1} lettersFound={lettersFound} />
        <Row onClick={onClick} letters={row2} lettersFound={lettersFound} />
        <Row onClick={onClick} letters={row3} lettersFound={lettersFound} />
    </div>
  );
};