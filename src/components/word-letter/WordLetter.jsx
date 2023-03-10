import './WordLetter.css';

export const WordLetter = ({ statut, letter }) => {
    let character = "_";
    if (statut === "visible") {
        character = letter;
    }

  return (
    <div>
        {character} 
    </div>
  );
};