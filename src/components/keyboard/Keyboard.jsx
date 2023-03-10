
import { Row } from '../keyboard-row/KeyboardRow';
import './Keyboard.css';

const row1 = ["a","z","e","r","t","y","u","i","o","p"];
const row2 = ["q","s","d","f","g","h","j","k","l","m"];
const row3 = ["w","x","c","v","b","n"];


export const Keyboard = ({ }) => {
  return (
    <div className='keyboard'>
        <Row letters={row1} />
        <Row letters={row2} />
        <Row letters={row3} />
    </div>
  );
};