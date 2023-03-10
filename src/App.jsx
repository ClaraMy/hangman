import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className='hangman-side'>
          <Hangman />
        </div>
        <div className='word-side'>
          <Keyboard />
        </div>
      </main>
    </>
  );
}

export default App;
