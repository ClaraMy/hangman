import './Message.css';

export const Message = ({ word, win }) => {
  return (
    <p className='message'>{win ? `vous avez survecu a la pendaison car vous avez trouve le mot ${word}! (ca ne se passera pas comme ca a chaque fois)` : "oh non vous etes mort :("}</p>
  );
};