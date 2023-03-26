import './Message.css';

export const Message = ({ text, word }) => {
  return (
    <p className='modal__text'>{text}</p>
  );
};