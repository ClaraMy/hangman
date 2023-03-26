import './Message.css';

export const Message = ({ text, word, win }) => {
  return (
    <p className='modal__text'>{win ? `vous avez survecu a la pendaison car vous avez trouve le mot ${word}! (ca ne se passera pas comme ca a chaque fois)` : "oh non vous etes mort :("}</p>
  );
};