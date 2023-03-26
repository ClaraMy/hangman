import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';
import { Button } from '../button/Button';

export const Modal = ({ word, state, textReplay, textHome, subtextReplay, subtextHome, onClose }) => {
  return (
    <div className='modal'>
        <ModalSvg />
        <Button text={textReplay} subtext={subtextReplay} />
        <Button onClick={onClose} text={textHome} subtext={subtextHome} />
    </div>
  );
};