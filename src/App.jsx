import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Message } from './components/message/Message';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className='hangman-side'>
          <Hangman />
          <Message text="tout va bien ((:"/>
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
