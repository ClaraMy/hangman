import './WordLetter.css';

export const WordLetter = ({ statut, letter }) => {
    const character = "_";
    if (statut === "visible") {
        character = letter;
    }
    
  return (
    <>
        {character}
    </>
  );
};