import './Message.css';

export const Message = ({ text }) => {
  return (
    <p className='modal__text'>{text}</p>
  );
};