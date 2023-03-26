import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';

export const Modal = ({ state }) => {
  return (
    <div className='modal'>
        <ModalSvg />
        <p className="modal__text"></p>
    </div>
  );
};