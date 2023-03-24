import './Word.css';

export const Word = ({ word, lettersFound }) => {
    // Fonction pour transformer la chaîne de caractère en un tableau avec chacune des lettres
    let wordLetters = word.split('');

  return (
    <div className='word'>
        {wordLetters.map((letter, index) => (
          <span
            key={index}
            className={`letter ${lettersFound.includes(letter) ? 'trouvee' : ''}`}
          >
            {lettersFound.includes(letter) ? letter : '_'}
          </span>
        ))}
    </div>
  );
};