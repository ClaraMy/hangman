import './Button.css';

export const Button = ({ onClose, win }) => {
  return (
    <div className='button' onClick={onClose}>
        <p className="button__text">{win ? `risquer sa vie de nouveau` : "mourir de nouveau"}</p>
        <p className="button__subtext">(rejouer)</p>
    </div>
  );
};