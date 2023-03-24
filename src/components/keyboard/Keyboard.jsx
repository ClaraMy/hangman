
import { Row } from '../keyboard-row/KeyboardRow';
import './Keyboard.css';

const row1 = ["a","z","e","r","t","y","u","i","o","p"];
const row2 = ["q","s","d","f","g","h","j","k","l","m"];
const row3 = ["w","x","c","v","b","n"];


export const Keyboard = ({ onClick }) => {
  return (
    <div className='keyboard'>
        <Row onClick={onClick} letters={row1} />
        <Row onClick={onClick} letters={row2} />
        <Row onClick={onClick} letters={row3} />
    </div>
  );
};