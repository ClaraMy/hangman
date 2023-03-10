import './Message.css';

export const Message = ({ texte }) => {
  return (
    <p className='message'>{texte}</p>
  );
};