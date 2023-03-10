import { ReactComponent as Key } from '../../assets/key.svg';
import './KeyboardKey.css';

export const Key = ({ letter }) => {
  return (
    <div className='key'>
        <Key className='key__svg'/>
        <p className='key__letter'>{letter}</p>
    </div>
  );
};