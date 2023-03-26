import './Modal.css';
import { ReactComponent as ModalSvg } from '../../assets/modal.svg';
import { Button } from '../button/Button';

export const Modal = ({ state }) => {
  const addText = () => {
    if (state === "win") {
      text1 = "risquer encore sa vie";
      text2 = "partir de cet enfer";
    }

    if (state === "lose") {
      text1 = "mourir de nouveau";
      text2 = "accepter la mort";
    }

    subtext1 = "(rejouer)";
    subtext2 = "(retourner au menu)";
  }

  addText();

  return (
    <div className='modal'>
        <ModalSvg />
        <p className="modal__text"></p>
        <Button text={text1} subtext={subtext1} />
        <Button text={text2} subtext={subtext2} />
    </div>
  );
};