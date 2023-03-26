import './Button.css';

export const Button = ({ text, subtext }) => {
  return (
    <div>
        <p className="button__text">{text}</p>
        <p className="button__subtext">{subtext}</p>
    </div>
  );
};