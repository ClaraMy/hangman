
import './Keyboard.css';

export const Keyboard = ({ }) => {
  return (
    <div className='keyboard__row'>
        <Key className='key__svg'/>
        <p className='key__letter'>{letter}</p>
    </div>
  );
};