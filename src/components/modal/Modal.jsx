import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';
import { Button } from '../button/Button';

export const Modal = ({ state, textReplay, textHome, subtextReplay, subtextHome }) => {
  return (
    <div className='modal'>
        <ModalSvg />
        <p className="modal__text"></p>
        <Button text={textReplay} subtext={subtextReplay} />
        <Button text={textHome} subtext={subtextHome} />
    </div>
  );
};