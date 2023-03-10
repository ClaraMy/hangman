import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';

const App = () => {
  return (
    <div>
      <Header />
      <Hangman />
      <Keyboard />
    </div>
  );
}

export default App;
