import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';
import { Button } from '../button/Button';

export const Modal = ({ word, win, onClose }) => {
  return (
    <div className='modal'>
        <ModalSvg />
        <div className="modal__container">
          <p className='modal__text'>{win ? `vous avez survecu a la pendaison car vous avez trouve le mot ${word}! (ca ne se passera pas comme ca a chaque fois)` : "oh non vous etes mort :("}</p>
          <Button onClose={onClose} win={win} />
        </div>
    </div>
  );
};