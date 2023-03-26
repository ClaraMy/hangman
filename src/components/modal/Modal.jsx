import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';
import { Button } from '../button/Button';
import { Message } from '../message/Message';

export const Modal = ({ word, win, message, textReplay, subtextReplay, onClose }) => {
  return (
    <div className='modal'>
        <ModalSvg />
        <div className="modal__container">
          <Message word={word} win={win}/>
          <Button onClick={onClose} text={textReplay} subtext={subtextReplay} />
        </div>
    </div>
  );
};