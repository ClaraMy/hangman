import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';
import { Button } from '../button/Button';
import { Message } from '../message/Message';

export const Modal = ({ word, message, textReplay, subtextReplay, onClose }) => {
  return (
    <div className='modal'>
        <ModalSvg />
        <Message text={message} />
        <Button onClick={onClose} text={textReplay} subtext={subtextReplay} />
    </div>
  );
};