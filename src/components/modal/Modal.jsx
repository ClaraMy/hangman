import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';
import { Button } from '../button/Button';

export const Modal = ({ word, state, textReplay, textHome, subtextReplay, subtextHome, onClose }) => {
  return (
    <div className='modal'>
        <ModalSvg />
        <Button onClick={onClose} text={textReplay} subtext={subtextReplay} />
    </div>
  );
};