import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';
import { Button } from '../button/Button';

export const Modal = ({ state }) => {
  return (
    <div className='modal'>
        <ModalSvg />
        <p className="modal__text"></p>
        <Button text={text1} subtext={subtext1} />
        <Button text={text2} subtext={subtext2} />
    </div>
  );
};