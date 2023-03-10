import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className='hangman-side'>
          <Hangman />
        </div>
        <div className='word-side'>
          <Word />
          <Keyboard />
        </div>
      </main>
    </>
  );
}

export default App;
